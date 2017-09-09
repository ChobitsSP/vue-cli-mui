import * as types from '../mutation-types'

import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

const TOKEN_NAME = 'token'

// initial state
const state = {
    token: window.localStorage.getItem(TOKEN_NAME)
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
let mutations = {}

mutations[types.SET_TOKEN] = function (state, r) {
    state.token = r
    window.localStorage.setItem(TOKEN_NAME, r)
}

mutations[types.LOGOUT] = function (state) {
    state.token = null
    window.localStorage.removeItem(TOKEN_NAME)
    //router.push({ name: 'login' })
}

export default {
    state,
    getters,
    actions,
    mutations
}
