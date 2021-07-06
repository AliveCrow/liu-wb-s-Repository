<template>
  <div id="app">
    <Nav title="马雄" description="一个程序员的自留地" />
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}

.app-container {
  margin: 0 auto;
}
</style>
