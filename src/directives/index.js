import mui from 'mui'

export const MuiInput = {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        mui(el).input()
    }
}
