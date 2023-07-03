<template>
    <div class="todoapp">
        <todo-header @add="add"></todo-header>
        <todo-main :state="state" @del="del" :showType="showType"></todo-main>
        <todo-footer
            :state="state"
            :showType.sync="showType"
            @clearComplete="clearComplete"
        >
            <!-- 

            :value="showType"
            @input="changeType" ----- v-model

       -->
        </todo-footer>
    </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
    components: { TodoFooter, TodoHeader, TodoMain },

    data() {
        return {
            state: [{ id: 100, name: '吃饭', isDone: true }],
            showType: 'all', //uncomplete , complete
        }
    },

    created() {},

    methods: {
        clearComplete() {
            this.state = this.state.filter(item => !item.isDone)
        },
        changeType(type) {
            this.showType = type
        },
        add(name) {
            console.log('name: ', name)
            this.state.push({
                id: Date.now(),
                name,
                isDone: false,
            })
        },
        del(row) {
            this.state = this.state.filter(item => item.id !== row.id)
        },
    },
}
</script>

<style scoped></style>
