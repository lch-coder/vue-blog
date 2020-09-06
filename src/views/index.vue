<template>
    <div class="container">
        <myNav></myNav>
        <div class="bg-top">
            <div class="bg"></div>
        </div>
        <div class="content">
            <router-view class="main" />
            <!-- <slider class="slider"></slider> -->
        </div>
    </div>
</template>

<script>
import slider from '@/components/slider'
import myNav from '../components/nav'
export default {
    components: {
        myNav,
        slider,
    },
}
</script>

<style scoped lang='less'>
.container {
    display: flex;
    justify-content: center;
    .bg-top {
        height: 320px;
        position: relative;
        width: 100%;
        background-image: url('../assets/image/anime.jpg');
        background-size: cover;
        background-position: center center;
    }
    .content {
        display: flex;
        position: absolute;
        width: 90%;
        max-width: 1200px;
        top: 321px;
        .main {
            flex: 1;
        }
    }
}
@media screen and (max-width: 1200px) {
    .slider {
        display: block;
    }
}
@media screen and (max-width: 928px) {
    .slider {
        display: none;
    }
}
@media screen and (max-width: 646px) {
    .slider {
        display: none;
    }
}
</style>
