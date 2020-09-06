<template>
    <div class="container">
        <myNav></myNav>
        <div class="content">
            <router-view />
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
        width: 85%;
        top: 61px;
    }
}
</style>
