<template>
    <ul class="todo-list">
        <!-- completed: 完成的类名 -->
        <li
            :class="[item.isDone && 'completed']"
            v-for="item in showList"
            :key="item.id"
        >
            <div class="view">
                <input class="toggle" type="checkbox" v-model="item.isDone" />
                <label>{{ item.name }}</label>
                <button class="destroy" @click="delState(item)"></button>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    computed: {
        ...mapState('todo', ['list']),
        ...mapGetters('todo',['showList'])
    },
    methods: {
        ...mapMutations('todo', ['delState']),
    },
}
</script>
