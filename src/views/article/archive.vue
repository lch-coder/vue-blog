<template>
    <div class="archive left">
        <el-timeline>
            <el-timeline-item
                v-for="(l, i) in articlesList"
                :key="l.year + i"
                placement="top"
                hide-timestamp
            >
                <h3 class="year">{{l.year}}</h3>
                <el-timeline-item
                    v-for="(item, index) in l.list"
                    :key="item._id+index"
                    placement="top"
                    hide-timestamp
                >
                    <h3 class="title" @click="getArticleDetail(item._id)">{{item.title}}</h3>
                    <p class="time">{{item.createTime}}</p>
                </el-timeline-item>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            articlesList: [],
        }
    },
    created() {
        this.getArticleList()
    },
    methods: {
        ...mapActions(['archiveListApi']),
        getArticleList() {
            this.archiveListApi().then(res => {
                if (res.code === 200) {
                    this.articlesList = res.data.archiveList
                    console.log(this.articlesList, 'ss')
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
    },
}
</script>

<style lang="less" scoped>
.archive {
    padding: 40px 0;
    .year {
        font-size: 30px;
        font-weight: bold;
        color: #000;
        margin-top: 0;
    }
    /deep/ .el-timeline-item {
        margin-bottom: 10px;
    }
    .title {
        color: #333;
        cursor: pointer;
        padding: 10px 0;
        &:hover {
            color: #1890ff;
        }
    }
    .time {
        padding: 10px 0;
    }
}
</style>

