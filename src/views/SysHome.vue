<template>
  <div class="home">
    <sys-menu></sys-menu>
    <div id="basic-container">
      <router-view/>
    </div>
    <div id="micro-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LocalStorageUtil from '@/utils/storageUtil'
import SysMenu from '@/views/SysMenu'

export default {
  name: 'SysHome',
  components: {
    SysMenu
  },
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
