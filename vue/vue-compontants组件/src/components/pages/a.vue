<template>
  <div class="a-test">A
      <testb></testb>
  </div>
</template>

<script>
import b from '/b'
export default {
    provide:{
        name:'wowo'
    },
components:{
    'testb':b
}
}
</script>

<style>

</style>