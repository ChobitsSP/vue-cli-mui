<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">vue mui</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

</style>
