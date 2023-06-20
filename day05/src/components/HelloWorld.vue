<template>
  <div :style="{ color }">
    <!-- hello -{{ currenInfo.name }}-{{ currenInfo.age }} --{{ height }} __info- -->
    {{ info }}
    <button @click="changeAge">+1</button>
    <hr />
    <!-- $attrs - 没有被当前组件接受的所有的值  $listeners 事件 只要有都会触发-->
    <Sun v-bind="$attrs" v-on="$listeners" @addMoney="addMoney"></Sun>

    <hr />
    <Sun2 v-if="info.age < 21"></Sun2>
  </div>
</template>

<script>
import Sun from './Sun.vue'
import Sun2 from './Sun2.vue'

export default {
  name: 'HelloWorld',
  components: { Sun, Sun2 },
  props: {
    // money: {
    //   type: Number
    // },
    changeHeight: {
      type: Function,
      default: () => () => {}
    },
    // currenInfo: {
    //   type: Object, // 指定类型
    //   required: false, // 是否必须
    //   default: () => ({ name: 'ls', age: 21 }) // 默认值
    // },
    color: {
      type: String, // String ,Number , Boolean
      required: false,
      default: '#0f0'
    },
    height: {
      type: [Number, String], // 多个类型
      default: '20'
    }
  },
  data () {
    return {
      info: { name: 'zs', age: 18 }
    }
  },
  methods: {
    addMoney () {
      console.log('addMoney')
      // this.$emit('addMoney')
    },
    changeInfoAge () {
      this.info.age += 1
    },
    changeAge (val) {
      // this.currenInfo.age += 1
      this.info.age += 1

      // this.currenInfo.age += 1

      // 重新赋值 -地址被改了 -
      // this.currenInfo = {
      //   ...this.currenInfo,
      //   age: this.currenInfo.age + 1
      // }
      /// /数据流------单向数据流- 从高到低， 从父到子

      // this.height += 1
      // 自定义事件
      this.$emit('changeHeight', 10)
      // this.changeHeight(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
