<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <div class="info">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped lang="scss">
.info {
  margin: 20px 0;
  cursor: default;
  height: 20px;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: $--second-text-color;
  font-size: 0.8rem;
}
</style>
