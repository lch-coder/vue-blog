<template>
  <div>
    <myNav></myNav>
    <router-view class="content" />
  </div>
</template>

<script>
import myNav from '../components/nav'
export default {
  components: {
    myNav
  }
}
</script>

<style scoped>
.content {
  margin-top: 61px!important;
}
</style>
