<template>
  <div class="comment-list-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CommentContainer",
};
</script>

<style scoped lang="scss">
.comment-list-wrapper {
  margin-bottom: 40px;
}
</style>
