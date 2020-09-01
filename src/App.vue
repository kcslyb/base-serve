<template>
  <div class="home">
    <sys-menu></sys-menu>
<!--    <div id="basic-container">-->
<!--      <router-view/>-->
<!--    </div>-->
    <div id="micro-container">
      <router-view/>
    </div>
  </div>
</template>
<script>

import SysMenu from '@/views/SysMenu'
export default {
  name: 'app',
  components: { SysMenu }
}
</script>
<style lang="less">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
