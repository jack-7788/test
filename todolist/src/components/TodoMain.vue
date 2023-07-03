<template>
    <ul class="todo-list">
        <!-- completed: 完成的类名 -->
        <li
            :class="[item.isDone && 'completed']"
            v-for="item in list"
            :key="item.id"
        >
            <div class="view">
                <input class="toggle" type="checkbox" v-model="item.isDone" />
                <label>{{ item.name }}</label>
                <button class="destroy"></button>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('todo', ['list']),
    },
    methods: {},
}
</script>
