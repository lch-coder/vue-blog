<template>
    <div class="home">
        <canvas id="canv"></canvas>
    </div>
</template>

<script>
import { stars_nest } from '../../static/stars-nest'

export default {
    name: 'Home',
    data() {
        return {}
    },
    mounted() {
        //****在这里绑定监听器
        stars_nest()
    },
    methods: {},
}
</script>
<style lang='less' scoped>
.home {
    width: 100%;
    height: 100vh;
    margin: 0;
    background-image: -webkit-radial-gradient(
        ellipse farthest-corner at center top,
        #000d4d 0%,
        #000105 100%
    );
    background-image: radial-gradient(
        ellipse farthest-corner at center top,
        #000d4d 0%,
        #000105 100%
    );
}
</style>