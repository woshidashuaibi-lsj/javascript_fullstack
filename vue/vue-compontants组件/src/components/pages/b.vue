<template>
  <div class="b-test">
      B{{name}}
      <div>
          <textc></textc>
      </div>
  </div>
</template>

<script>
import c from './c'
export default {
inject: ['name'],
mountes () {
   console.log(this.name)
},
components:{
    'textc':c
}
}
</script>

<style>

</style>