<template>
  <div id="app">
    <Nav title="console.log('刘文博');"/>
    <Container class="container" style="margin-top: 20px">
      <el-row :gutter="10">
<!--        <el-col  :xs="1" :sm="1" :md="2" :lg="0" :xl="0"></el-col>-->
        <el-col  :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
          <router-view/>
        </el-col>
<!--        <el-col  :xs="1" :sm="1" :md="2" :lg="0" :xl="0"></el-col>-->
        <el-col  :xs="0" :sm="0" :md="0" :lg="6" :xl="6">
            <Aside >
              <Framework class="aside-item" :header="false" :border="false" shadow="hover">
                search
              </Framework>
              <Framework  class="aside-item" :header="false" :border="false" shadow="hover">
                search
              </Framework>
              <Framework  class="aside-item" :header="false" :border="false" shadow="hover">
                search
              </Framework>
            </Aside>
        </el-col>
      </el-row>
    </Container>
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Aside from "@/components/Aside";

export default {
  components: {
    Nav,
    Aside
  },
  data(){
    return {
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $--text-color;
  background-color: $--background-color;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .container {
    flex: 1
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.aside-item{
  margin-bottom: 10px;
}
</style>
