<!-- 父组件 -->
 
<template>
 <div>
  <h1>我是父组件！</h1>
 <!-- //通过自定义属性传递数据 -->
  <child message="我是子组件一！"></child> 
 </div>
</template>
 
<script>
import Child from '../components/方法一/child.vue'
export default {
 components: {Child},
}
</script>


<style>

</style>