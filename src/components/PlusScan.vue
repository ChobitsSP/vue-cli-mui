<template>
  <button type="button" @click="click">
    <slot></slot>
  </button>
</template>

<script>
  import EventBus from '@/utils/EventBus'

  export default {
    props: {
      value: String
    },
    methods: {
      update(obj) {
        this.$emit('input', obj.result)
        EventBus.$off('plus-scan', this.update)
      },
      click() {
        window.clicked('static/scan.html', true, true)
        EventBus.$on('plus-scan', this.update)
      }
    }
  }
</script>
