<template>
  <div>
    {{ loginStatus }}-{{ loginStatus11 }}
    111---globalName---{{ globalName }}--{{ name }}--{{ globalNameNext }}-{{
      getNextAge
    }}
    <button @click="changeGlobalName">修改globalName</button>
    <button @click="changeHomeName">修改home模块的name</button>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import { SET_GLOBAL_NAME } from '@/store/mutation-Type'

export default {
  created () {
    // console.log(this.$store.state.globalName)
    // console.log(this.$store.state.home.name)
    // console.log(this.$store.getters.globalNameNext)
    // console.log(this.$store.getters['home/getNextAge'])
    console.log(this.$store)
  },
  computed: {
    ...mapState(['globalName']),
    ...mapState('home', ['name']),
    ...mapGetters(['globalNameNext', 'loginStatus11']),
    ...mapGetters('home', ['getNextAge']),
    ...mapState({
      loginStatus: (state) => state.user.loginStatus
    })
  },
  methods: {
    ...mapMutations([SET_GLOBAL_NAME]),
    ...mapMutations('home', ['setName']),
    ...mapActions(['changeGlobalNameAction', 'action2']),
    ...mapActions('home', ['setNameAction']),
    async changeGlobalName () {
      this[SET_GLOBAL_NAME]('abc')
      // // this.setGlobalName('abc')
      // // this.$store.commit('setGlobalName', 'abc')
      // // const res = await this.$store.dispatch('changeGlobalNameAction', 'action')
      // // const res2 = await this.$store.dispatch('action2', res)
      // // this.setGlobalName(res2)
      // // console.log('res: ', res, res2)
      // const res = await this.changeGlobalNameAction('action')
      // const res2 = await this.action2(res)
      // this.setGlobalName(res2)
    },
    changeHomeName () {
      // this.setName('22')
      // this.$store.commit('home/setName', '1')

      // this.$store.dispatch('home/setNameAction', 'qaz')
      this.setNameAction('qaz')
      // const k = 'name121211212121212'
      // const obj = {
      //   [k]: 'zs'
      // }
      // console.log(obj, { name: 'zs' })
    }
  }
}
</script>
<style lang="less" scoped></style>
