import * as types from '../mutation-types'

// initial state
const state = {
    title: null,
    debug: process.env.NODE_ENV !== 'production',
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
let mutations = {}

//mutations[types.SET_TITLE] = function (state, r) {
//    state.title = r
//}

export default {
    state,
    getters,
    actions,
    mutations
}
