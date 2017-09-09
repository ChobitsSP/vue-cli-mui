<template>
  <div class="mui-content">
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>快速删除</label>
        <input type="text" v-mui-input v-model="message" class="mui-input-clear" placeholder="请输入内容">
      </div>
      <div class="mui-input-row">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
  import mui from 'mui'

  export default {
    data() {
      return {
        message: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
