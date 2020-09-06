<template>
  <div class="home">
    <div v-if="$route.meta.isBasic">
      <router-view/>
    </div>
    <div v-else>
      <sys-menu></sys-menu>
      <div id="micro-container">
      </div>
    </div>
  </div>
</template>
<script>

import SysMenu from '@/components/SysMenu'
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
  padding: 0;
  margin: 0;
}
</style>
