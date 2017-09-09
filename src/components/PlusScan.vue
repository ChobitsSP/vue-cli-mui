<template>
  <button type="button" @click="click">
    <slot></slot>
  </button>
</template>

<script>
  import EventBus from '@/utils/EventBus'

  export default {
    methods: {
      update(obj) {
        this.$emit('input', obj.result)
        EventBus.$off('plus-scan', this.update)
      },
      click() {
        EventBus.$on('plus-scan', this.update)
      }
    }
  }
</script>
