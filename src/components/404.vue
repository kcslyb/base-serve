<template>
  <el-main>
    <div>
      <div style="text-align: center">
        <h1> What have you done? </h1>
        <div>
          <el-button type="text" style="display: inline" @click="goBack">
            <h4> Now Go Back Using Below LInk</h4>
          </el-button>
        </div>
        <span id="error-link">{{number}}</span>
        <h2>! ERROR DECETED !</h2>
      </div>
    </div>
  </el-main>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
@Component
export default class NotFound extends Vue {
  [x: string]: any
  @Provide() private number = 404

  public goBack (): void {
    window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/').catch((e) => { console.error(e) })
  }
}
</script>

<style scoped>
  #error-link {
    font-size: 10em;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
