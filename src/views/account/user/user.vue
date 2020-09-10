<template>
  <kcs-common-page>
    <template slot="main">
      <kcs-form-option
        v-model="searchData"
        :is-show-search-btn="true"
        :form-items="formItems">
      </kcs-form-option>
      <kcs-btn-list
        :btn-list="btnList">
      </kcs-btn-list>
      <kcs-table
        :total="total"
        :data="tableData"
        :page="condition"
        :columns="tableColumns"
        @pageChange="pageChange">
      </kcs-table>
    </template>
  </kcs-common-page>
</template>

<script>
import Resource from '../../../api/resource'

export default {
  name: 'user',
  data () {
    return {
      searchData: {},
      formItems: [
        {
          type: 'input',
          name: 'productName',
          label: '名称'
        }, {
          type: 'input',
          name: 'productName',
          label: '名称'
        }
      ],
      btnList: [
        {
          label: '新增',
          type: 'primary',
          action: 'add'
        }, {
          label: '删除',
          type: 'warning',
          action: 'delete'
        }
      ],
      total: 0,
      condition: {
        size: 10,
        start: 1
      },
      tableColumns: [
        {
          prop: 'userName',
          label: '用户名'
        }, {
          prop: 'userEmail',
          label: '邮箱'
        }, {
          prop: 'userPhone',
          label: '电话号码'
        }, {
          prop: 'userDepartmentName',
          label: '用户级别'
        }, {
          prop: 'userRoleName',
          label: '用户角色名'
        }, {
          prop: 'userLastLoginTime',
          label: '最近登录时间'
        }
      ],
      tableData: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      const api = new Resource('/user/account')
      const params = Object.assign({}, this.condition, this.searchData)
      api.page(params).then(res => {
        console.info(res.data)
        const { total, list } = res.data
        this.total = total
        this.tableData = list
        this.condition.size = params.size
        this.condition.start = params.start
      })
    },
    pageChange (page) {
      this.condition = Object.assign({}, this.condition, page)
      this.initData()
    }
  }
}
</script>

<style scoped>

</style>
