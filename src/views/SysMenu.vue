<template>
  <div class="menu">
    <div class="menu-logo">
      <div class="menu-btn">KCS_LYB</div>
    </div>
    <div class="menu-content">
      <div class="menu-left">
        <div :class="{'menu-btn': true, 'menu-btn-active': isActive}">KCS_LYB</div>
        <div class="menu-btn">KCS_LYB</div>
        <div class="menu-btn">KCS_LYB</div>
        <div class="menu-btn">KCS_LYB</div>
        <div class="menu-btn">KCS_LYB</div>
        <div class="menu-btn">KCS_LYB</div>
        <div class="menu-btn">KCS_LYB</div>
      </div>
      <div class="menu-right">
        <div class="user">
          <a-avatar class="user-icon" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div class="user-name">渣渣灰</div>
        </div>
        <div class="logout">退出</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SysMenu',
  data () {
    return {
      currentActive: ''
    }
  },
  computed: {
    isActive () {
      return true
    }
  },
  components: {
  }
}
</script>
<style scoped lang="less">
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    color: #000000A6;
    font-weight: bold;
    border-bottom: 1px solid #F2F2F2;
    .menu-logo {
      width: 50px;
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
          line-height: 50px;
          padding: 0 20px;
          &:hover {
            color: #1890ff;
            border-bottom: 1px solid #1890ff;
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
</style>
