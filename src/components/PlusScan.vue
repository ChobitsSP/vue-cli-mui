<script>
  import EventBus from '@/utils/EventBus'

  export default {
    props: {
      value: String,
      tag: {
        type: String,
        default: 'div'
      }
    },
    render: function (h) {
      return h(
        this.tag,   // tag name 标签名称
        {
          // 事件监听器基于 `on`
          // 所以不再支持如 `v-on:keyup.enter` 修饰器
          // 需要手动匹配 keyCode。
          on: {
            click: this.clickHandler
          }
        }, this.$slots.default
      )
    },
    methods: {
      update(obj) {
        this.$emit('input', obj.result)
        EventBus.$off('plus-scan', this.update)
      },
      clickHandler() {
        window.clicked('static/scan.html', true, true)
        EventBus.$off('plus-scan')  //cancel all event
        EventBus.$on('plus-scan', this.update)
      }
    },
    beforeDestroy() {
      EventBus.$off('plus-scan', this.update)
    }
  }
</script>
