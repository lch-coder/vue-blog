<template>
    <header class="nav">
        <div class="nav-content">
            <div class="nav-rows">
                <ul>
                    <router-link
                        :to="item.path"
                        :index="item.index"
                        v-for="(item, index) in navList"
                        :key="index"
                    >
                        <li>
                            <i :class="item.class"></i>
                            {{ item.name }}
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            navList: [
                {
                    index: '0',
                    path: '/',
                    name: '首页',
                    class: 'el-icon-s-home',
                },
                {
                    index: '1',
                    path: '/index/article/list',
                    name: '文章',
                    class: 'el-icon-document',
                },
                {
                    index: '2',
                    path: '/index/article/archive',
                    name: '归档',
                    class: 'el-icon-folder',
                },
                {
                    index: '3',
                    path: '/message',
                    name: '留言',
                    class: 'el-icon-message',
                },
                {
                    index: '4',
                    path: '/about',
                    name: '关于',
                    class: 'el-icon-coffee-cup',
                },
            ],
        }
    },
    methods: {
        handleSelect(val) {
            this.activeIndex = val
        },
    },
}
</script>

<style scoped lang="less">
.nav {
    padding: 0;
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 2;
    background: rgba(40, 42, 44, 0.6);
    .nav-content {
        width: 90%;
        max-width: 1200px;
        margin: auto;
        padding: 0 15px;
        height: 100%;
        .nav-rows {
            position: relative;
            height: 100%;
            box-sizing: border-box;
            display: inline-block;
            ul {
                a {
                    color: #fff;
                }
                li {
                    display: inline-block;
                    cursor: pointer;
                    padding: 12px 20px;
                    &:hover {
                        background: rgba(120, 120, 120, 0.6);
                    }
                }
            }
        }
    }
}
</style>
