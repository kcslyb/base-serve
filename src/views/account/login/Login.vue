<template>
  <div>
    <div class="page-wrap">
      <div class="container">
        <div class="content">
          <div class="nav-login">
            <div class="content-container nav-container">
              <h1>
                BLOG
              </h1>
              <h3>
                Individual Learning
              </h3>
              <p>
                Ability to improve of personal blog.
              </p>
            </div>
            <div class="sign-in-container nav-container">
              <div class="border-item">
                <span class="nav-item" :class="isActive ? 'is-active' : 'not-active'">
                  <a @click="isActive = true">Sign in</a>
                </span>
                <span class="nav-item" :class="isActive ? 'not-active' : 'is-active'">
                  <a @click="addUer">Register</a>
                </span>
              </div>
              <div class="login-box">
                <el-form
                  v-show="isActive"
                  ref="login"
                  :model="user"
                  status-icon
                  :inline="true"
                  :rules="userRules"
                  label-position="left"
                  class="demo-ruleForm">
                  <el-form-item
                    label-width="100px"
                    prop="userName"
                    label="用户名">
                    <el-input v-model="user.userName"></el-input>
                  </el-form-item>
                  <el-form-item
                    label-width="100px"
                    prop="passWord"
                    label="用户密码">
                    <el-input type="password" v-model="user.passWord"></el-input>
                  </el-form-item>
                </el-form>
                <div>
                  <div class="remember" v-show="isActive">
                    <div class="float-left">
                      <el-checkbox v-model="user.remember">Remember me</el-checkbox>
                    </div>
                    <div class="float-right">
                      <a @click="resetPassword">Forgot your password?</a>
                    </div>
                  </div>
                  <div>
                    <input type="button" :value="isActive ? 'Sign in' : 'Register'" class="btn-submit" @click="handleLogin">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LocalStorageUtil from '../../../utils/storageUtil'
import actions from '../../../shared/actions'

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      showRight: false,
      showRightRest: false,
      isActive: true,
      loading: false,
      rememberFlag: 0,
      user: {
        remember: false,
        userName: '',
        passWord: ''
      },
      loginItems: [
        { type: 'input', name: 'userName', label: '用户名', placeholder: '请输入用户名或邮箱' },
        { type: 'input', name: 'passWord', label: '密码', showPassword: true, clearable: true }
      ],
      userRules: {
        userName: [
          { required: true, message: '请输入用户名或邮箱', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.setUserDate()
  },
  methods: {
    setUserDate () {
      const user = LocalStorageUtil.getInstance().getItem('user')
      if (user) {
        // eslint-disable-next-line no-undef
        this.user = EncryptHelper.aesDecrypt(user)
      }
    },
    handleLogin () {
      this.$refs.login.validate((valid) => {
        if (valid) {
          actions.setGlobalState(state => {
            return Object.assign({}, state, { user: this.user })
          })
          // this.$store.dispatch('Login', this.user).then(res => {
          //   if (res) {
          //     LocalStorageUtil.getInstance().clear()
          //     actions.setGlobalState(state => {
          //       return Object.assign({}, state, { user: res })
          //     })
          //     if (this.user.remember) {
          //       // eslint-disable-next-line no-undef
          //       const encrypt = EncryptHelper.aesEncrypt(JSON.stringify(this.user))
          //       LocalStorageUtil.getInstance().setItem('user', encrypt)
          //     }
          //     this.$router.push('/home').catch((e) => {
          //       throw new Error(e)
          //     })
          //   }
          // }).catch((e) => {
          //   throw new Error(e)
          // })
        }
      })
    },
    addUer () {
      this.isActive = false
      this.showRight = true
    },
    resetPassword () {
      this.showRightRest = true
    },
    rightClose () {
      this.isActive = true
      this.showRight = false
      this.showRightRest = false
    }
  }
}
</script>
<style scoped lang="less">
  .page-wrap {
    min-height: 100%;
    padding-top: 10%;
    position: relative;
  }

  .container {
    width: 100%;
    padding: 0;
    margin: auto;
  }

  .content {
    margin: auto;
    width: 50%;
    text-align: center;
    @media (max-width: 1350px) {
      width: 60%;
    }
    @media (max-width: 1150px) {
      width: 70%;
    }
    @media (max-width: 950px) {
      width: 80%;
    }
    @media (max-width: 800px) {
      width: 90%;
    }
    @media (max-width: 720px) {
      width: 100%;
    }
  }

  .nav-login {
    margin: auto;
    text-align: center;
  }

  .border-item {
    clear: left;
    width: 100%;
    box-shadow: 0 0 0 2px #e5e5e5;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  .nav-item {
    width: 50%;
    padding: 8px;
    line-height: 28px;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
  }

  .nav-item a {
    cursor: pointer;
    display: block;
    list-style: none;
    font-size: 14px;
    text-decoration: none;
    line-height: 28px;
    transition: background-color 100ms linear, color 100ms linear, border 100ms linear;
  }

  .is-active {
    border-bottom: 1px solid #007bff;

    a {
      color: #000;
      background-color: #fff;
    }
  }

  .not-active {
    background-color: #fafafa;
    border-bottom: 1px solid transparent;

    a {
      color: #707070;
      background-color: transparent;
    }
  }

  .nav-container {
    width: 100%;
    text-align: left;
    display: inline-block;
    box-sizing: border-box;
  }

  .content-container {
    float: left;
    width: 45%;
    @media (max-width: 650px) {
      width: 100%;
      text-align: center;
    }
  }

  .sign-in-container {
    position: relative;
    width: 55%;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #2e2e2e;
    text-align: left;
    @media (max-width: 650px) {
      width: 100%
    }
  }

  .btn-submit {
    color: white;
    background-color: #007bff;
    padding: 6px 0 10px;
    margin-bottom: 10px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid #007bff;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    -webkit-appearance: none;
    outline: 0;
    transition: .1s;
    font-weight: 500;
  }

  .float-left {
    float: left !important;
    box-sizing: border-box;
  }

  .float-right {
    padding-top: 5px;
    float: right !important;
    box-sizing: border-box;
  }

  .float-right a {
    cursor: pointer;
    font-size: 12px;
    list-style: none;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }

  .remember {
    width: 100%;
    cursor: default;
    box-sizing: border-box;
    display: inline-block;
    padding: 5px 0;
  }

  .login-box {
    box-shadow: 0 0 0 2px #e5e5e5;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    padding: 15px 15px 5px;
  }

  label {
    display: inline-block;
    padding-top: 5px;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #2e2e2e;
    text-align: left;
    background-color: #fff;
  }

  .input {
    width: 94%;
    display: block;
    padding: 6px 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #2e2e2e;
    background-color: #e8f0fe;
    background-clip: padding-box;
    border: 1px solid #dfdfdf;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
</style>
