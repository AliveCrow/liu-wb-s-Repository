<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <ul class="timeline">
    <slot></slot>
    <li class="timeline-header">start</li>
  </ul>
</template>

<script>
export default {
  name: "TimelineBox",
};
</script>

<style scoped lang="scss">
.timeline {
  &-header {
    font-size: 1rem;
    background-color: #555;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    min-width: 100px;
    display: inline-block;
    text-align: center;
  }
}
</style>
