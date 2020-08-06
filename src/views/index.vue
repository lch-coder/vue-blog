<template>
    <div class="container">
        <myNav></myNav>
        <div class="content">
            <router-view style="width:100%" />
        </div>
    </div>
</template>

<script>
import myNav from '../components/nav'
export default {
    components: {
        myNav,
    },
}
</script>

<style scoped lang='less'>
.container {
    display: flex;
    justify-content: center;
    .content {
        display: flex;
        position: absolute;
        min-width: 1200px;
        width: 85%;
        justify-content: center;
        top: 61px;
    }
}
</style>
