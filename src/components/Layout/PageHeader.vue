<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <div class="page-header" style="font-size: 1rem">
    <el-button
      type="text"
      icon="el-icon-back"
      style="font-size: inherit"
      @click="back"
      >返回</el-button
    >
    <span class="delimiter">/</span>
    <span style="font-size: inherit">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["content"],
  methods: {
    back() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: $--border-radius;
  margin-bottom: 10px;
  padding: 5px 10px;
  .delimiter {
    padding: 0 10px;
  }
}
</style>
