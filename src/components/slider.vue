<template>
    <div class="right">
        <img class="portrait" src="../assets/avat.jpg" />
        <h4 class="title">哈哈哈！</h4>
        <div class="line"></div>
        <div class="tags">
            <div>标签云</div>
            <router-link
                v-for="item in tagList"
                class="item"
                :key="item._id"
                :to="`/articles?tag_id=${item._id}&tag_name=${item.name}&category_id=`"
            >
                <span :key="item._id">{{item.name}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'slider',
    data() {
        return {
            tagList: [],
        }
    },
    created() {
        this.getTagList()
    },
    methods: {
        ...mapActions(['getTagListApi']),
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
    },
}
</script>

<style scoped lang="less">
.right {
    width: 350px;
    padding-top: 50px;
    text-align: center;
    .portrait {
        width: 130px;
        border-radius: 50%;
        animation: portrait 3s;
        -moz-animation: portrait 3s; /* Firefox */
        -webkit-animation: portrait 3s; /* Safari and Chrome */
        -o-animation: portrait 3s; /* Opera */
        animation-iteration-count: infinite;
    }
    .title {
        font-size: 25px;
        font-weight: 700;
    }
    .line {
        padding: 10px 0 20px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
    }
    .tags:first-child {
        font-size: 14px;
        color: #969696;
    }
    .item {
        display: inline-block;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #eee;
        color: #333;
        margin: 10px 10px 0 0;
        text-decoration: none;
    }
}

@keyframes portrait {
    0% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
    25% {
        transform: rotate(0deg) scale(1, 1);
        opacity: 0.8;
    }
    100% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
}

@-moz-keyframes portrait {
    0% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
    25% {
        transform: rotate(0deg) scale(1, 1);
        opacity: 0.8;
    }
    100% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
}

@-webkit-keyframes portrait {
    0% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
    25% {
        transform: rotate(0deg) scale(1, 1);
        opacity: 0.8;
    }
    100% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
}

@-o-keyframes portrait {
    0% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
    25% {
        transform: rotate(0deg) scale(1, 1);
        opacity: 0.8;
    }
    100% {
        transform: rotate(0deg) scale(0.8, 0.8);
        opacity: 1;
    }
}
</style>