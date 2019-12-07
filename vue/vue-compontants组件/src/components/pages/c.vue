<template>
  <div class="c-test">cccc{{app.userInfo.age}}</div>
</template>

<script>

export default {
inject: ['name'],
inject: ['app']
}
</script>

<style>

</style>