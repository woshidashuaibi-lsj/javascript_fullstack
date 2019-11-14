<template>
  <div class="container">jhh
    <child v-bind:send-msg="myMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      myMsg: 'l am your father msg!'
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>