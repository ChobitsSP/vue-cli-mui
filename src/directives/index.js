import mui from 'mui'

export const MuiInput = {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        mui(el).input()





        el.addEventListener('focus', function () {



            


            mui.trigger(el, 'input')
        })
    }
}
