<template>
  <el-row>
    <el-col :xs="0" :sm="1" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
    <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20">
      <slot></slot>
    </el-col>
    <el-col :xs="0" :sm="1" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
  </el-row>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>

</style>