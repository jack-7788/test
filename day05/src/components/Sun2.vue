<template>
  <div>
    sun2
--{{ msg }}
    {{ newMoney }}
  </div>
</template>
<script>
export default {
  inject: {
    money: {
      type: Function
    }
  },
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    newMoney () {
      return this.money()
    }
  },
  created () {
    this.getMsg()
  },
  methods: {
    getMsg () {
      this.$bus.$off('sendMsg')
      this.$bus.$on('sendMsg', (val) => {
        console.log('val: ', val)
        this.msg = val
      })
      clearTimeout(this.timerId)
      this.timerId = setInterval(() => {
        console.log(11)
      }, 1000)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timerId)
    this.$bus.$off('sendMsg')
  }
}
</script>
<style lang="less" scoped></style>
