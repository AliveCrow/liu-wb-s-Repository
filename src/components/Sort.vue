<template>
  <Framework class="aside-item" :border="false" shadow="never">
    <div slot="header" class="aside-header">
      <i class="el-icon-takeaway-box"></i>
      <span>栏目分类</span>
    </div>
    <template v-if="sortList.length > 0">
      <div class="sort-wrapper" v-for="sortItem in sortList" :key="sortItem.id">
        <div class="sort-title">
          <i class="el-icon-tickets"></i>
          <span>{{ sortItem.name }}</span>
        </div>
        <div class="sort-number">
          {{ sortItem.number }}
        </div>
      </div>
    </template>
    <template v-else>
      <el-skeleton :rows="5" animated />
    </template>
  </Framework>
</template>

<script>
export default {
  name: "Sort",
  props: ["sortList"],
};
</script>

<style scoped lang="scss">
.sort-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  .sort-title {
    cursor: pointer;
    &:hover {
      color: rgba($--nav-background-color, 0.4);
    }
  }
  .sort-number {
    background-color: $--text-color;
    color: #fff;
    padding: 0 5px;
    border-radius: 4px;
  }
}
</style>
