<template>
    <div style="display:flex">
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

<style scoped>
.content {
    display: flex;
    margin-top: 61px;
    min-width: 1200px;
    width: 85%;
    justify-content: center;
    margin: 61px auto 0;
}
</style>
