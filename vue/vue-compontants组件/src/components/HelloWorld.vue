<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="large" @on-click="handleclick1">
      <i slot="icon">*</i>
      按钮
    </i-button>
    <i-button size="small" @on-click="handleclick2">提交</i-button>
    <i-button size="small" ref="sure" @click.native="osure">确认</i-button>
    
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      props: ['message']
    }
  },
  components: {
    'i-button': button
  },
  methods:{
    handleclick1(){
      console.log('hello word')
    },
    handleclick2(){
      console.log('nihao')
    },
    osure(){
      this.$refs.sure.osure
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
