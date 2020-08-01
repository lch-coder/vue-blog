<template>
    <div class="nav">
        <div class="nav-content">
            <div class="nav-rows">
                <el-row>
                    <el-col :span="3">
                        <router-link to="/">
                            <img class="logo" src="../assets/avat.jpg" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="16">
                        <ul>
                            <el-menu
                                :router="true"
                                :default-active="activeIndex"
                                active-text-color="#409eff"
                                mode="horizontal"
                                @select="handleSelect"
                            >
                                <el-menuItem
                                    :route="item.path"
                                    :index="item.index"
                                    v-for="(item, index) in navList"
                                    :key="index"
                                >
                                    {{ item.name }}
                                </el-menuItem>
                            </el-menu>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <div class="nav-right">
                            <el-button size="small" type="primary"
                                >登录</el-button
                            >
                            <el-button size="small" type="danger"
                                >注册</el-button
                            >
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '0',
            navList: [
                {
                    index: '0',
                    path: '/',
                    name: '首页',
                },
                {
                    index: '1',
                    path: '/articles',
                    name: '文章',
                },
                {
                    index: '2',
                    path: '/archive',
                    name: '归档',
                },
                {
                    index: '3',
                    path: '/message',
                    name: '留言',
                },
                {
                    index: '4',
                    path: '/about',
                    name: '关于',
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    .nav-content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        .nav-rows {
            position: relative;
            height: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin-left: -10px;
            margin-right: -10px;
            .logo {
                height: 60px;
                width: 60px;
                border-radius: 50%;
            }
            .el-menu.el-menu--horizontal {
                border-bottom: none;
            }
            .el-menu--horizontal > .el-menu-item {
                cursor: pointer;
                &:hover {
                    color: rgb(64, 158, 255);
                }
            }
        }
        .nav-right {
            position: relative;
            padding-top: 15px;
            text-align: right;
        }
    }
}
</style>
