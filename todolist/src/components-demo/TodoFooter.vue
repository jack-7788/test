<template>
    <footer class="footer">
        <span class="todo-count"
            >剩余<strong>{{ yu }}</strong></span
        >
        <ul class="filters">
            <li @click="changeType('all')">
                <a href="javascript:;">全部{{ list.length }}</a>
            </li>
            <li @click="changeType('uncomplete')">
                <a href="javascript:;">未完成{{ yu }}</a>
            </li>
            <li @click="changeType('complete')">
                <a href="javascript:;">已完成 {{ list.length - yu }} </a>
            </li>
        </ul>
        <button class="clear-completed" @click="clearComplete">
            清除已完成
        </button>
    </footer>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    computed: {
        ...mapGetters('todo', ['yu']),
        ...mapState('todo', ['list']),
    },
    methods: {
        ...mapMutations('todo', ['changeType', 'clearComplete']),
    },
}
</script>
