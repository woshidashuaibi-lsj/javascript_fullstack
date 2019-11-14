<template>
  <div class="container">
    <h2>父组件</h2>
    <p>
      从子组件获取的消息为:
      <span class="red">{{msg}}</span>
    </p>
    <child v-on:messagehhh="getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data() {
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    // 获取到emit的第二个参数
    getMsg (e) {
      this.msg = e
    }
  }
}
</script>

<style>
.red{
  color: red;
}
</style>