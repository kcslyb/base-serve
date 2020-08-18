<template>
  <div class="home">
  </div>
</template>

<script>
import LocalStorageUtil from '@/utils/storageUtil'

export default {
  name: 'SysHome',
  components: {
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
