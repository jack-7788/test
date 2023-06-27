import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import { SET_GLOBAL_NAME } from './mutation-Type'

Vue.use(Vuex)

const store = {
  state: {
    globalName: 'globalName12121',
    user: {
      loginStatus: 'xxxxloginStatus'
    }
  },
  getters: {
    loginStatus11 (state) {
      return state.user.loginStatus
    },
    globalNameNext (state) {
      return state.globalName + 'xxxxx'
    }
  },
  mutations: {
    // 需要使用commit进行调用
    [SET_GLOBAL_NAME] (state, payload) {
      state.globalName = state.globalName + payload
    }
  },
  actions: {
    action2 (action, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // action.commit('setGlobalName', payload)
          resolve('res2')
        }, 3000)
      })
    },
    // 修改变量的异步的方法
    changeGlobalNameAction (action, payload) {
      console.log('payload: ', payload)
      console.log('action: ', action)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          action.dispatch('action2', 'ok')
          // action.commit('setGlobalName', payload)
          resolve('ok')
        }, 2000)
      })
    }
  },
  modules: { home }
}

export default new Vuex.Store(store)

// export default new Vuex.Store({
//   state: {
//     // 变量
//   },
// getters:{// 相当于一个计算属性

// }
//   mutations: {
//     // 修改变量的同步的方法
//   },
//   actions: {
//     // 修改变量的异步的方法
//   },
//   modules: {
//     // 模块化
//   }
// })
