import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
console.log('todo: ', todo);

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{todo}

})
