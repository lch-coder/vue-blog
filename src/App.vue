<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('打印出来的路由', this.$router.options.routes)
  }
}
</script>

<style>
</style>
