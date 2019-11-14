<template>
  <div class="child">
    <h3>子组件</h3>
    <div class="">子组件要发送的消息：{{msg}}</div>
    <button @click="sendMsg">send message</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是子组件当中的数据'
    }
  },
  methods: {
    // 点击按钮后emit将事件发散
    sendMsg () {
      this.$emit('messagehhh',this.msg)
    }
  }
}
</script>

<style>

</style>