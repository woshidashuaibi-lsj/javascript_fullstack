<template>
  <button :class="'i-button-size'+size" @click="handleclick"> 
      <slot name="icon"></slot>
      <!-- 具名插槽 -->
      <slot></slot>
  </button>
</template>

<script>
function oneof(value,valueList){
   for(let i=0;i<valueList.length;i++){
       if(value===valueList[i]){
           return true
       }
   }return false
}
export default {
    props:{
        size: {
            type: String,
            validator (value){
               return oneof(value,['small','large','default'])
            },
            default:'default'
        },
    },
    data(){
        return{
            message:'子组件的内容'
        }
    },
    methods:{
        handleclick(){
        //  this.$emit('on-click')
         console.log('aaa')
        },
         sureclick(){
        //  this.$emit('on-click')
         console.log('vvvvv')
        }
    }
}
</script>

<style scoped>
button{
    border: 1px solid orange;
    background-color: yellow;
    color: black;
    border-radius: 5px;
}
.i-button-sizelarge{
    padding: 10px 16px;
}
.i-button-sizedefult{
    padding: 8px 10px;
}
.i-button-sizesmall{
    padding: 4px 6px;
}
</style>