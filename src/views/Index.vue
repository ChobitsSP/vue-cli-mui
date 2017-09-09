<template>
  <div class="mui-content">
    <img src="../assets/logo.png">
    <div class="title">
      routes
    </div>
    <div class="mui-card" style="margin-bottom: 35px;">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in list">
          <router-link class="mui-navigate-right" :to="{ name: item.name }">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import router from '@/router'

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.list = router.options.routes.filter(t => t.name !== this.$route.name)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mui-content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
