<template>
  <div ref="link-to-page-a">
    <router-link :to="{ ...route }" :active-class="activeClass">
      <div>
        <slot></slot>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LinkToPage",
  props: {
    route: {
      type: Object,
      required: true,
      default: () => {
        return {
          path: null,
          name: null,
        };
      },
    },
    activeClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
</style>
