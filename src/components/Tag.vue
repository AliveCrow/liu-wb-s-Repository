<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <Framework class="aside-item" :border="false" shadow="never">
    <div slot="header" class="aside-header">
      <i class="el-icon-paperclip"></i>
      <span>标签云</span>
    </div>
    <template v-if="tagList.length > 0">
      <el-tag effect="plain" :key="tag.id" v-for="tag in tagList">
        {{ tag.name }}
      </el-tag>
    </template>
    <template v-else>
      <el-skeleton :rows="5" animated />
    </template>
  </Framework>
</template>

<script>
export default {
  name: "Tag",
  props: ["tagList"],
};
</script>

<style scoped lang="scss">
.el-tag {
  margin-right: 10px;
  cursor: default;
  transition: all ease 0.25s;
  &:hover {
    color: $--nav-hover-color;
    border-color: $--nav-hover-color;
  }
}
</style>
