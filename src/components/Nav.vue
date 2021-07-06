<template>
  <div class="c-nav">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["title", "description"],
};
</script>

<style scoped lang="scss">
.c-nav {
  padding-top: 60px;
  margin-bottom: 40px;
  text-align: left;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    color: #909399;
    margin-top: 10px;
  }
}
</style>
