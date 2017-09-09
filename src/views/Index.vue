<template>
  <div class="mui-content">
    <div class="title">
      routes
    </div>
    <div class="mui-card" style="margin-bottom: 35px;">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <router-link class="mui-navigate-right" :to="{ name: 'Hello' }">
            Hello
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
