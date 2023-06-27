//   state: {
//     // 变量
//   },
//   mutations: {
//     // 修改变量的同步的方法
//   },
//   actions: {
//     // 修改变量的异步的方法
//   },
//   modules: {
//     // 模块化
//   }

const state = {
  name: 'zs',
  age: 18
}
const getters = {
  getNextAge (state) {
    return state.age + 1
  }
}

const mutations = {
  setName (state, payload) {
    state.name = state.name + payload
  }
}

const actions = {
  setNameAction (action, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        action.commit('setName', payload)
      }, 2000)
    })
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
