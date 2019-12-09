<template>
<!-- <Button a="1" b="2"> -->
  <!-- <el-row>
    <el-col :span="12">
      12份
    </el-col>
    <el-col :span="6">
      6份
    </el-col>
    <el-col :span="6">
      6份
    </el-col>
  </el-row> -->
  <MyRow tag="section">
    <MyCol :span="12">12</MyCol>
    <MyCol :span="6">6</MyCol>
    <MyCol :span="6">6</MyCol>
  </MyRow>

</template>

<script>
import MyRow from './my_Row'
import MyCol from './My-Col'
export default {
  components:{
    MyRow,
    MyCol
  }
}
</script>

<style>

</style>