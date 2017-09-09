import Vue from 'vue'

const EventBus = new Vue()

export default EventBus

window.scaned = function (type, result, file) {
    const obj = {
        type: type,
        result: result,
        file: file,
    }

    EventBus.$emit('plus-scan', obj)
}
