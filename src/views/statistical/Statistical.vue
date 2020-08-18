<template>
<div>Statistical</div>
</template>

<script>
export default {
  name: 'Statistical',
  data () {
    return {
      loading: false,
      tableData: [],
      tableColumns: [],
      pagination: {}
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.tableData = []
      this.tableColumns = []
    }
  }
}
</script>

<style scoped>

</style>
