<template>
    <div class="article">
        <div class="left">
            <loading v-if="isLoading"></loading>
            <template v-if="articleList.length>0">
                <div>
                    <div class="article-list" v-for="article in articleList" :key="article._id">
                        <div class="article-img" @click="getArticleDetail(article._id)">
                            <img :src="article.coverUrl" />
                        </div>
                        <div class="article-content">
                            <div class="article-detail">
                                <h2 @click="getArticleDetail(article._id)">{{ article.title }}</h2>
                                <div class="article-desc">
                                    <p>{{ article.desc }}</p>
                                </div>
                            </div>
                            <div class="meta">
                                <span>
                                    <i class="el-icon-view"></i>
                                    查看
                                    {{ article.views }}
                                </span>
                                <span>
                                    <i class="el-icon-edit-outline"></i>
                                    评论
                                    {{ article.comments }}
                                </span>
                                <span>赞 {{ article.likes }}</span>
                                <span class="time">
                                    发布时间：
                                    {{ $moment(article.createTime).format("YYYY-DD-MM HH:mm:ss") }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <pagination
                    @handleSizeChange="handleSizeChange"
                    @handleCurrentChange="handleCurrentChange"
                    :current-page="search.pageNumber"
                    :totalPage="search.totalPage"
                    :pageSize="search.pageSize"
                />
            </template>
            <div v-else style="text-align:center;">暂无数据</div>
        </div>
    </div>
</template>

<script>
import pagination from '@/components/pagination'
import loading from '@/components/loading'
import { mapActions } from 'vuex'
export default {
    components: {
        pagination,
        loading,
    },
    data() {
        return {
            search: {
                pageNumber: 1,
                pageSize: 10,
                totalPage: 20, //总条数，不是总页数
            },
            articleList: [],
            tagList: [],
            isLoading: true,
        }
    },
    created() {
        this.getArticleList()
        this.getTagList()
    },
    methods: {
        ...mapActions(['articleListApi', 'getTagListApi']),
        getArticleList() {
            let params = { deleted: false }
            let page = {
                pageNumber: this.search.pageNumber,
                pageSize: this.search.pageSize,
                sort: { updateTime: -1 },
            }
            this.articleListApi({ params, page }).then(res => {
                if (res.code === 200) {
                    this.articleList = res.data.list
                    this.search.pageNumber = res.data.pageNumber
                    this.search.totalPage = res.data.totalCount
                } else {
                    this.$message.error(res.msg)
                }
            })
            this.isLoading = false
        },
        getTagList() {
            let params = { deleted: false }
            this.getTagListApi(params).then(res => {
                if (res.code === 200) {
                    this.tagList = res.data.list
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        getArticleDetail(id) {
            this.$router.push({
                path: '/index/article/detail',
                query: {
                    id: id,
                },
            })
        },
        // 切换每页条数
        handleSizeChange(val) {
            console.log(val)
            this.search.pageSize = val
            this.search.pageNumber = 1
            this.getArticleList()
        },
        //翻页
        handleCurrentChange(val) {
            this.search.pageNumber = val
            this.getArticleList()
        },
    },
}
</script>

<style scoped lang="less">
.article {
    display: flex;
    margin: 0 auto;
    .left {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding-right: 20px !important;
        .article-list {
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            border-top: 1px solid rgba(237, 239, 240, 0.8);
            margin-top: -1px;
            margin-bottom: 0;
            padding: 20px 0;
            height: 254px;
            .article-img {
                position: relative;
                flex-shrink: 0;
                flex: 0 0 40%;
                max-width: 40%;
                overflow: hidden;
                margin: 0 20px 0 0;
                border-radius: 6px;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    cursor: pointer;
                    transition: all 0.6s;
                }
            }
            .article-content {
                display: flex;
                flex-direction: column;
                flex: 1 1 auto;
                justify-content: center;
                padding: 10px 0;
                .article-detail {
                    flex: 1 1 auto;
                    margin: 10px 0;
                    h2 {
                        cursor: pointer;
                    }
                    .article-desc {
                        margin-top: 20px;
                        p {
                            color: #6c757d;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            white-space: normal;
                        }
                    }
                }
            }
            &:hover {
                img {
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>
