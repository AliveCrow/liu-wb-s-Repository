<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <el-pagination
      class="page"
      background
      :layout="layout"
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      :hide-on-single-page="true"
      @current-change="$emit('currentChange',arguments)"
      @prev-click="$emit('prevClick',arguments)"
      @next-click="$emit('nextClick',arguments)"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "Page",
  props: {
    layout: {
      type: String,
      default: 'prev, pager, next',
      required:false
    },
    total: {
      type: Number,
      default: 0,
      required:true
    },
    currentPage: {
      type: Number,
      default: 1,
      required:true
    },
    pageSize: {
      type: Number,
      default: 10,
      required:true
    }

  }
}
</script>

<style scoped>
.page{
  margin: 60px 0;
}
</style>