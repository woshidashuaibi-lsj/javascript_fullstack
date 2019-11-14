<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div>
      string: <span>{{sendMsg}}</span>
    </div>
    <div>
      number: <span>{{sendNum}}</span>
    </div>
     <div>
      <ul class="red">
        <li v-for="item in sendObject" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: true
    },
    sendObject: {
      // 声明检验类型 当子组件要求父组件传来的值是特定值是用validator验证类型
      validator (val) {
        if (Object.prototype.toString.call(val) === "[object Array]" ||
            Object.prototype.toString.call(val) === "[object object]") 
        {
          return true
        }
      }
    },
  }
}
</script>

<style>
.red{
  color: red;
}
</style>