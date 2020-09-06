<template>
    <div class="container">
        <myNav></myNav>
        <div class="bg-top">
            <div class="desc">
                <h2>ANIME</h2>
            </div>
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
        .desc {
            top: 50%;
            position: absolute;
            text-align: center;
            width: 100%;
            margin-top: -50px;
            z-index: 2;
            color: #fff;
            text-shadow: 2px 2px 2px #666;
            h2 {
                color: #fff;
                font-size: 40px;
                display: inline-block;
            }
        }
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
