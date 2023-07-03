<template>
    <div class="todoapp">
        <!-- <A v-if="xxx"></A>
        <B v-else> </B> -->
        <component :is="currentCom"></component>
        <button @click="changeType">切换组件</button>
        <todo-header v-if="0"></todo-header>
        <todo-main v-if="0"></todo-main>
        <todo-footer v-if="0"> </todo-footer>
    </div>
</template>

<script>
import TodoFooter from './components-demo/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components-demo/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components-demo/TodoMain.vue' // shift + alt + 下

// import A from './A.vue'
// import B from './B.vue'
const A = () => import('./A.vue')
const B = () => import('./B.vue')
export default {
    components: { TodoFooter, TodoHeader, TodoMain, A, B },

    data() {
        return {
            type: '1',
        }
    },
    computed: {
        currentCom() {
            if (this.type === '1') {
                return A
            } else {
                return B
            }
        },
    },

    created() {},

    methods: {
        changeType() {
            this.type = this.type === '1' ? '2' : '1'
        },
    },
}
</script>

<style scoped></style>
