<template>
    <footer class="footer">
        <span class="todo-count"
            >剩余<strong>{{ yu.length }}</strong></span
        >
        <ul class="filters">
            <li @click="changeShowTYpe('all')">
                <a class="selected" href="javascript:;">
                    全部{{ state.length }}
                </a>
            </li>
            <li @click="changeShowTYpe('uncomplete')">
                <a class="selected" href="javascript:;">
                    未完成{{ yu.length }}
                </a>
            </li>
            <li @click="changeShowTYpe('complete')">
                <a class="selected" href="javascript:;">
                    已完成{{ state.length - yu.length }}
                </a>
            </li>
        </ul>
        <button class="clear-completed" @click="clearComplete">
            清除已完成
        </button>
    </footer>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    props: {
        state: {
            type: Array,
            default: () => [],
        },
        showType: {
            type: String,
            default: '',
        },
        value:{
            type:String
        }
    },
    methods: {
        ...mapMutations(['setFliter', 'clearList']),
        changeFliter(i) {
            this.setFliter(i)
        },
        changeShowTYpe(type) {
            // this.$emit('changeType', type)
            // this.showType = 
            // .sync + 'update:xxx'   vue3----> v-model
            this.$emit('update:showType',type)
            // this.$emit('input',type)
        },
        clearComplete() {
            this.$emit('clearComplete')
        },
    },
    computed: {
        ...mapState(['filter', 'myList']),
        noIsDone() {
            return this.myList.filter(item => item.isDone === false).length
        },
        yu() {
            return this.state.filter(item => !item.isDone)
        },
    },
}
</script>
