const state = {
    list: [{ id: 100, name: '吃饭', isDone: true }],
    type: 'all', //uncomplete , complete
}
const getters = {
    yu(state) {
        return state.list.filter(item => !item.isDone).length
    },
    showList(state) {
        if (state.type === 'all') {
            return state.list
        }
        if (state.type === 'uncomplete') {
            return state.list.filter(item => !item.isDone)
        }
        if (state.type === 'complete') {
            return state.list.filter(item => item.isDone)
        }
        return state.list
    },
}
const mutations = {
    addState(state, payload) {
        console.log('payload: ', payload)
        state.list = [...state.list, payload]
    },
    delState(state, payload) {
        state.list = state.list.filter(item => item.id !== payload.id)
    },
    changeType(state, type) {
        state.type = type
    },
    clearComplete() {
        state.list = state.list.filter(item => !item.isDone)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
}
