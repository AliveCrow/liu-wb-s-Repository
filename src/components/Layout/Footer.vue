<template>
  <div class="c-footer">
    <Container style="line-height: 60px; height: 60px">
      <div class="c-footer-wrapper">
        {{ content }}
      </div>
    </Container>
  </div>
</template>

<script>
import { NavList } from "@/libs/nav-list";

export default {
  name: "Footer",
  props: ["content"],
};
</script>

<style scoped lang="scss">
.c-footer {
  height: 60px;
  background-color: $--nav-background-color;

  &-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: $--nav-color;
  }
}
</style>
