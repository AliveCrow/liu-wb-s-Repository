<template>
  <div id="app">
    <Nav title="echo '刘文博';" />
    <Container class="container" style="margin-top: 20px">
      <router-view />
    </Container>
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
  background-color: $--background-color;
  display:flex;
  flex-direction: column;
  min-height:100vh;
  .container{
    flex:1
  }
}

</style>
