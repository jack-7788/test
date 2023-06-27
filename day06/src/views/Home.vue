<template>
  <div>
    组件
    <HelloWorld  ></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  data () {
    return {
      currenInfo: { name: 'ls', age: 19 }
    }
  }
}
</script>
<style lang="less" scoped></style>
