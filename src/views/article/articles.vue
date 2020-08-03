<template>
    <div class="article">
        <div class="left">
            <ul>
                <li v-for="article in articleList" :key="article._id" class="item">
                    <img class="img" :src="article.img_url" />
                    <div class="content">
                        <h4 class="title">{{ article.title }}</h4>
                        <p class="abstract">{{ article.desc }}</p>
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
                                {{ article.create_time }}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <pagination
                @handleSizeChange="handleSizeChange"
                @handleCurrentChange="handleCurrentChange"
                :current-page="search.pageNumber"
                :totalPage="search.totalPage"
                :pageSize="search.pageSize"
            />
        </div>
        <slider></slider>
    </div>
</template>

<script>
import slider from '@/components/slider'
import pagination from '@/components/pagination'
import { mapActions } from 'vuex'
// import { formatTime } from '../../utils/index'
export default {
    components: {
        slider,
        pagination,
    },
    data() {
        return {
            search: {
                pageNumber: 1,
                pageSize: 20,
                totalPage: 20, //总条数，不是总页数
            },
            articleList: [],
            tagList: [],
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
                } else {
                    this.$message.error(res.msg)
                }
            })
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
        // 切换页数
        handleSizeChange(val) {
            console.log(val)
        },
        //翻页
        handleCurrentChange(val) {
            console.log(val)
        },
    },
}
</script>

<style scoped lang="less">
.article {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    .left {
        width: 850px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding-right: 20px !important;
        .item {
            line-height: 20px;
            position: relative;
            padding: 15px 0;
            padding-right: 150px;
            border-bottom: 1px solid #f0f0f0;
            word-wrap: break-word;
            cursor: pointer;
            text-align: left;
            .img {
                position: absolute;
                top: 50%;
                margin-top: -50px;
                right: 0;
                width: 125px;
                height: 100px;
            }
            .title {
                color: #333;
                margin: 7px 0 4px;
                display: inherit;
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
            }
            .abstract {
                min-height: 30px;
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
                color: #555;
            }
            .meta {
                padding-right: 0 !important;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                span {
                    margin-right: 10px;
                    color: #666;
                }
            }
        }
    }
}
</style>
