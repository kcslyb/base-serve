<template>
  <div class="container">
    <div class="menu">
      <div class="menu-logo">
        <div class="menu-btn">KCS_LYB</div>
      </div>
      <div class="menu-content">
        <div class="menu-left">
          <div
            :class="{'menu-btn': true, 'menu-btn-active': isActive(item)}"
            v-for="item in menu"
            :key="item.meta.moduleId"
            @click="handleMenuClick(item)">
            {{item.meta.title}}
          </div>
        </div>
        <div class="menu-right">
          <el-dropdown @command="handleCommand">
            <div class="user">
              <el-avatar class="user-icon" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              <div class="user-name">{{$store.state.user.userInfo.userName}}</div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">个人信息</el-dropdown-item>
              <el-dropdown-item align="center" command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="secondary-menu">
      <div
        :class="{'secondary-menu-item': true, 'menu-btn-active': isSecondActive(item)}"
        v-for="item in secondMenu"
        :key="item.meta.moduleId"
        @click="handleSecondMenuClick(item)">
        {{item.meta.title}}
      </div>
    </div>
    <div class="kcs-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SysMenu',
  data () {
    return {
      menu: [],
      currentActive: '',
      secondMenu: [],
      secondMenuActive: ''
    }
  },
  mounted () {
    this.initData()
  },
  watch: {
    '$store.state.menu.currentRouters': {
      handler () {
        this.initData()
      },
      deep: true
    }
  },
  methods: {
    initData () {
      this.menu = this.$store.getters.currentRouters || []
      if (this.menu.length > 0) {
        this.secondMenu = this.menu[0].children || []
        this.handleMenuClick(this.menu[0])
      }
    },
    isActive (item) {
      return item.path === this.currentActive
    },
    handleMenuClick (item) {
      this.currentActive = item.path
      this.secondMenu = item.children || []
      if (this.secondMenu.length > 0) {
        this.handleSecondMenuClick(this.secondMenu[0])
      }
    },
    isSecondActive (item) {
      return item.path === this.secondMenuActive
    },
    handleSecondMenuClick (item) {
      this.secondMenuActive = item.path
      this.$router.push(item.path).catch((e) => console.info(e))
    },
    handleCommand (command) {
      const process = {
        info: () => {
          this.$message({
            message: 'info'
          })
        },
        logout: () => {
          this.$store.dispatch('LogOut').then(() => {
            this.$router.push('/login').catch((e) => console.error(e))
          }).catch((e) => console.error(e))
        }
      }
      process[command].call(this)
    }
  },
  components: {}
}
</script>
<style scoped lang="less">
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 40px;
    color: #000000A6;
    font-weight: bold;
    border-bottom: 1px solid #F2F2F2;

    .menu-logo {
      width: 40px;
      display: inline-block;
    }

    .menu-content {
      display: flex;
      justify-content: space-between;

      .menu-left {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .menu-btn {
          cursor: pointer;
          line-height: 40px;
          padding: 0 20px;

          &:hover {
            color: #1890ff;
            border-bottom: 1px solid #1890ff;
            background: linear-gradient(to bottom, white 0%,#b3d8ff 100%);
          }
        }

        .menu-btn-active {
          color: #1890ff;
          border-bottom: 1px solid #1890ff;
        }
      }

      .menu-right {
        padding-left: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .user {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .user-name {
            cursor: pointer;
            padding: 0 10px;

            &:hover {
              color: #1890ff;
            }
          }
        }

        .logout {
          cursor: pointer;
          padding-left: 20px;

          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }

  .secondary-menu {
    text-align: left;
    border-bottom: 1px solid #F2F2F2;

    .secondary-menu-item {
      display: inline-block;
      box-sizing: border-box;
      cursor: pointer;
      line-height: 40px;
      padding: 0 30px;
      font-size: 14px;
      font-weight: bold;

      &:hover {
        color: #1890ff;
        background: linear-gradient(to bottom, white 0%,#b3d8ff 100%);
      }
    }

    .menu-btn-active {
      color: #1890ff;
      line-height: 40px;
      border-bottom: 1px solid #1890ff;
    }
  }
</style>
