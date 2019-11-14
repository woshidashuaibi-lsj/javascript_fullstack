<template>
  <div class="container">
    <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <child v-bind:send-msg="myMsg" :send-num="myNum" :send-obj="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      myMsg: '我是父组件的信息',
      myNum: [1,2,3,4,5],
      myObj: [
        {
          id: 1,
          name: '张三'
        },
        {
          id: 2,
          name: '李四'
        },
        {
          id: 3,
          name: '老王'
        },
      ]
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>