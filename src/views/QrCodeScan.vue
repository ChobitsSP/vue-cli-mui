<template>
  <div class="mui-content hello">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" v-for="item in list">
        <Plus-Scan tag="a" v-model="item.value" class="mui-navigate-right">
          {{ item.value || '点击扫码' }}
        </Plus-Scan>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      for (let i = 0; i < 5; i++) {
        this.list.push({
          value: null
        })
      }
    },
    components: {
      PlusScan: require('@/components/PlusScan')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
