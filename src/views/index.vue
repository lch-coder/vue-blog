<template>
  <div>
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
    myNav
  }
}
</script>

<style scoped>
.content {
  margin-top: 61px !important;
  min-width: 1200px !important;
  width: 85% !important;
  margin: auto !important;
  display: block !important;
  margin-top: 61px !important;
}
</style>
