<template>
    <header class="header">
        <h1>todos</h1>
        <input id="toggle-all" class="toggle-all" type="checkbox"   />
        <label for="toggle-all"></label>
        <input
            class="new-todo"
            v-model="name"
            placeholder="输入任务名称-回车确认"
            @keydown.enter="addState"
        />
    </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        ...mapMutations(['setMyList', 'cahnegFilterIsDone']),
       
        
    },
    computed: {
        ...mapState(['myList']),
        isDone: {
            set(val) {
                this.cahnegFilterIsDone(val)
            },
            get() {
                return this.myList.every(item => item.isDone)
            },
        },
    },
}
</script>
