<template>
  <div class="mui-content">
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in list">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="item.author.avatar_url">
          <div class="mui-media-body">
            {{ item.author.loginname }}
            <p class="mui-ellipsis">{{ item.title }}</p>
          </div>
        </a>
      </li>
    </ul>
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
        let rsp = await axios.get('https://cnodejs.org/api/v1/topics')
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
