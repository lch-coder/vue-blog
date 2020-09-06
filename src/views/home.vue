<template>
    <div id="home" class="home">
        <!-- <canvas id="canv"></canvas> -->
        <div class="my-world">
            <router-link to="/index/article/list">进入我的个人小站</router-link>
        </div>
    </div>
</template>

<script>
// import { stars_nest } from '../../static/stars-nest'

export default {
    name: 'Home',
    data() {
        return {}
    },
    mounted() {
        //****在这里绑定监听器
        // stars_nest()
    },
    methods: {},
}
</script>
<style lang='less' scoped>
#home {
    background: url('../assets/image/bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%; //大小设置为100%
    height: 100%; //大小设置为100%
    position: fixed;
    background-size: 100% 100%;
}
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 100%;
    // height: 100vh;
    // margin: 0;
    // background-image: -webkit-radial-gradient(
    //     ellipse farthest-corner at center top,
    //     #000d4d 0%,
    //     #000105 100%
    // );
    // background-image: radial-gradient(
    //     ellipse farthest-corner at center top,
    //     #000d4d 0%,
    //     #000105 100%
    // );
}
.my-world {
    cursor: pointer;
    a {
        color: #fff;
    }
}
</style>