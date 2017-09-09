<template>
  <div class="mui-content">

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.refresh()
    },
    methods: {
      async refresh() {
        const rsp = axios.get('https://cnodejs.org/api/v1/topics')
        this.list = rsp.data
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
