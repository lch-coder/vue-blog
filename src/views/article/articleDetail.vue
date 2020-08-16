<template>
    <div class="detail">
        <div class="left clearfix">
            <div class="header">
                <h1 class="title">{{articleDetail.title}}</h1>
                <div class="author">
                    <div class="avatar">
                        <img src="../../assets/avat.jpg" />
                    </div>
                    <div class="info">
                        <span class="name">{{'articleDetail.author'}}</span>
                        <div class="meta">
                            <span class="meta-item">{{articleDetail.create_time}}</span>
                            <span class="meta-item">字数 {{'articleDetail.numbers'}}</span>
                            <span class="meta-item">阅读 {{articleDetail.views}}</span>
                            <span class="meta-item">评论 {{'articleDetail.comments'}}</span>
                            <span class="meta-item">喜欢 {{articleDetail.likes}}</span>
                        </div>
                    </div>
                    <div class="tags" title="标签">
                        <el-tag
                            size="mini"
                            v-for="item in tagList"
                            :key="item.id"
                            class="tag"
                            type="success"
                        >{{item.name}}</el-tag>
                    </div>
                </div>
                <span class="clearfix" />
            </div>
            <div class="content">
                <div v-html="blogCtx.content" class="blog-content"></div>
                <!-- <div v-highlight v-html="articleDetail.html"></div> -->
            </div>
        </div>
        <div class="right">
            <div v-html="blogCtx.toc"></div>
        </div>
    </div>
</template>

<script>
import markdown from '@/utils/markdown'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { mapActions } from 'vuex'
export default {
    components: {
        mavonEditor,
    },
    data() {
        return {
            tagList: [],
            articleDetail: {},
            blogCtx: {},
        }
    },
    created() {
        this.getArticleList()
    },
    methods: {
        ...mapActions(['getArticleDetailApi']),
        getArticleList() {
            let articleId = this.$route.query.id
            this.getArticleDetailApi(articleId).then(res => {
                if (res.code === 200) {
                    this.tagList = res.data.tags.map(item => {
                        return {
                            id: item.id,
                            name: item.name,
                        }
                    })
                    this.blogCtx = markdown.marked(res.data.content)
                    this.articleDetail = res.data
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
    },
}
</script>

<style scoped lang="less">
.detail {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 66px);
    padding-top: 10px;
    font-size: 16px;
    width: 100%;
    .left {
        width: 75%;
        margin-right: 20px;
        margin-bottom: 2%;
        flex-shrink: 0;
        .header {
            width: 100%;
            height: 160px;
        }
        .title {
            margin-top: 20px;
            text-align: center;
            font-size: 34px;
            font-weight: 700;
        }
        .author {
            position: relative;
            margin: 30px 0 0 0;
            height: 48px;
            padding-left: 50px;
            .avatar {
                position: absolute;
                left: 0;
                top: 0;
                width: 48px;
                height: 48px;
                vertical-align: middle;
                display: inline-block;
                > img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .info {
                float: left;
                vertical-align: middle;
                margin-left: 8px;
                padding: 8px 0;
                .meta-item {
                    padding-right: 5px;
                    font-size: 12px;
                    color: #969696;
                }
            }
            .tags {
                float: right;
                padding-top: 15px;
                .tag {
                    margin-left: 5px;
                    border-right: 2px solid #eee;
                }
            }
        }
        .clearfix {
            clear: both;
        }
        #content {
            padding: 20px;
        }
    }
    .right {
        flex-shrink: 0;
        width: calc(25% - 20px);
        margin-top: 100px;
        box-sizing: border-box;
        /deep/ li {
            padding: 5px 0;
        }
    }
}
</style>