<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <Framework
    class="aside-item search"
    :header="false"
    :border="false"
    shadow="never"
  >
    <el-form :inline="true" :model="searchModel" class="search-form-inline">
      <el-form-item style="width: 100%" class="search-form-item">
        <el-input
          style="height: 40px"
          clearable
          class="search-form-input"
          v-model="searchModel.keyword"
          placeholder="输入关键字搜索"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="$emit('onSubmit')"
          icon="el-icon-search"
        ></el-button>
      </el-form-item>
    </el-form>
  </Framework>
</template>

<script>
export default {
  name: "Search",
  props: ["searchModel"],
};
</script>

<style scoped lang="scss">
.search {
  .el-card__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.search-form-inline {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.el-form-item--small.el-form-item {
  margin-bottom: 0;
}

.el-form-item {
  margin-bottom: 0;
}

.el-button--small {
  height: $--search-input-font-size;
}
</style>
