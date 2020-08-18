<template>
  <div class="home">
    <sys-menu></sys-menu>
    <div :id="appName">
      <router-view/>
    </div>
  </div>
</template>
<script>

import SysMenu from '@/views/SysMenu'
import LocalStorageUtil from '@/utils/storageUtil'
export default {
  name: 'app',
  components: { SysMenu },
  data () {
    return {
      appName: 'app'
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      const appName = LocalStorageUtil.getInstance().getItem('appName')
      this.appName = appName || 'app'
    }
  }
}
</script>
<style lang="less">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
