<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{money}}
    <HelloWorld
      ref="HelloWorld"
      :currenInfo="currenInfo"
      color="red"
      :height="height"
      :money="money"
      @changeHeight="changeHeight"
      @addMoney="addMoney"
      />
      <!-- :changeHeight="changeHeight" -->
    <button @click="changeVal">改子组件的数据</button>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  data () {
    return {
      currenInfo: { name: 'ww', age: 20 },
      height: 111,
      money: 100
    }
  },
  provide () {
    return {
      money: () => this.money
    }
  },
  methods: {
    addMoney () {
      this.money += 1
    },
    changeHeight (val) {
      console.log('val: ', val)
      this.height += val
    },
    changeVal () {
      console.log(11, this.$refs.HelloWorld)
      this.$refs.HelloWorld.changeInfoAge()
    }

  }
}
</script>
