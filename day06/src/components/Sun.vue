<template>
  <div>
    孙组件 --{{ currenInfo }}
    <hr />
    {{ money }}--{{ money() }}
    <button @click="addMoney">加钱</button>
    <button @click="sendMsg">给sun2发消息</button>
  </div>
</template>
<script>
export default {
  props: {
    currenInfo: {
      type: Object
    }
    // money: {
    //   type: Number
    // }
  },
  inject: {
    money: {
      type: Function
    }
  },
  methods: {
    addMoney () {
      this.$emit('addMoney')
    },
    sendMsg () {
      this.$bus.$emit('sendMsg', 1212121)
    }
  }
}
</script>
<style lang="less" scoped></style>
