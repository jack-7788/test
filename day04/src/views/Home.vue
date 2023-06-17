<template>
  <div class="home" :style="{ background: scrollTop > 500 ? 'red' : 'yellow' }">
    home
    <div>v-for</div>
    <ul>
      <li v-for="item in list" :key="item.name">
        {{ item.name }}---{{ item.age }}
      </li>
    </ul>

    <div>v-if</div>
    <div v-if="show">显示</div>
    <div>v-show</div>
    <div v-show="show">显示show</div>

    <button @click="clickMe">点击事件</button>
    <div :class="[isColorRed && 'colorRed']" @click="toggleColorRed">
      动态类名
    </div>
    <div
      :class="[isColorRed && 'colorRed']"
      :style="{ background: isF99 ? '#f99' : '' }"
      @click="toggleF99"
    >
      动态style-{{ isF99 }}
    </div>

    <div>
      逻辑运算 && : 全部为true 才是true true && true --->true true && 'abc'
      第一是true ， 返回值就是直接取第二个 ||:只要一个是true , 就是true true
      ||false ---> true 'abc'||true ---> 'abc' 'abc'||false ---> false //
      只要第一个是 true ，直接取第一个
    </div>

    <div>
      计算属性 --{{ zsInfo }} --nextAge-{{ nextAge }}--currentAge--{{
        currentAge
      }}
      <div>preAge_{{ preAge }}</div>
    </div>
    <div>
      v-model 修饰符
      <input type="text" v-model.trim="currentAge" />

      <input type="text" v-model="preAge" />

      <div>
        <input
          type="text"
          v-model="item.age"
          v-for="item in list"
          :key="item.name"
        />
      </div>
    </div>

    <div>
      filter-过滤器

      {{ currentAge | handleCurrentAge(20) }}---{{
        addCurrentAge(currentAge, 20)
      }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      scrollTop: 0,
      isF99: true,
      isColorRed: true,
      show: false,
      list: [
        { name: 'zs', age: 18 },
        { name: 'ls', age: 19 }
      ],
      currentAge: 18
    }
  },
  computed: {
    zsInfo () {
      // 根据data计算，  必须要有返回值
      return this.list.map((item) => item.name)
    },
    nextAge () {
      // 自动计算
      return +this.currentAge + 1
    },
    // 计算属性默认不支持修改
    // preAge () {
    //   return +this.currentAge - 1
    // }
    preAge: {
      get () {
        return +this.currentAge - 1
      },
      set (val) {
        this.currentAge = +val + 1
      }
    }
  },
  // 了解就可， vue3 已经被移除
  filters: {
    handleCurrentAge (val1, val2) {
      // val1 要被处理的数据
      // 传递来的其他参数
      // 要有返回值
      console.log('val1,val2: ', val1, val2)
      return val1 + val2
    }
  },
  watch: {
    // 监听简单类型
    currentAge (newVal, oldVal) {
      console.log('newVal , oldVal: ', newVal, oldVal)
      this.printAge()
    },

    // // 监听是一个复杂类型， 地址不变就不算变更
    // list (newVal, oldVal) {
    //   console.log('newVal, oldVal: ', newVal, oldVal)
    // }
    list: {
      handler (newVal, oldVal) {
        console.log('newVal, oldVal: ', newVal, oldVal)
        this.printAge()
      },
      immediate: true, // 希望初始化就执行一次监听方法
      deep: true // 深度监听 - 性能消耗
    }
  },
  methods: {
    handlerScroll (e) {
      this.scrollTop = +e.target.scrollingElement.scrollTop
      console.log('this.scrollTop: ', this.scrollTop)
    },
    addCurrentAge (val1, val2) {
      return val1 + val2
    },
    printAge () {
      console.log('printAge', this.currentAge)
    },
    clickMe () {
      console.log('111')
    },
    toggleF99 () {
      this.list = []
      this.isF99 = !this.isF99
    },
    toggleColorRed () {
      this.isColorRed = !this.isColorRed
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    // 无dom-------
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    window.addEventListener('scroll', this.handlerScroll)
    // -----
    // 有dom
    console.log('mounted')
  },
  beforeUpdate () {
    // console.log('beforeUpdate')
  },
  updated () {
    // console.log('updated')
  },
  beforeDestroy () {
    // -----
    console.log('beforeDestroy')
  },
  destroyed () {
    // -----
    console.log('destroyed')
  }
}
</script>
<style lang="less" scoped>
.colorRed {
  color: red;
}
.home {
  height: 10000px;
  background-color: #ddd;
}
</style>
