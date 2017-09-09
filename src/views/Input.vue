<template>
  <div class="mui-content">
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>快速删除</label>
        <input type="text" v-mui-input class="mui-input-clear" placeholder="请输入内容">
      </div>
    </form>
  </div>
</template>

<script>
  import mui from 'mui'

  export default {
    mounted() {
      this.$nextTick(() => {
        mui('.mui-input-row input').input()
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
