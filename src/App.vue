<template>
  <div id="app">
    <Nav title="console.log('刘文博');" />
    <Container class="container" style="margin-top: 20px" v-if="isAsideAlive">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
          <router-view />
        </el-col>
        <el-col :xs="0" :sm="0" :md="0" :lg="6" :xl="6">
          <Aside>
            <Search :search-model="searchModel" />
            <Tag :tagList="tagList" />
            <Sort :sortList="sortList" />
          </Aside>
        </el-col>
      </el-row>
    </Container>
    <Container class="container" style="margin-top: 20px" v-else>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <router-view />
        </el-col>
      </el-row>
    </Container>
    <Footer :content="footerContent" />
  </div>
</template>
<script>
import Nav from "./components/Layout/Nav";
import Aside from "@/components/Layout/Aside";
import Footer from "@/components/Layout/Footer";
import Search from "@/components/Search";
import { TagApi,SortApi } from "@/api";
import Sort from "@/components/Sort";
import {mapMutations} from "vuex";

export default {
  components: {
    Nav,
    Aside,
    Footer,
    Search,
    Sort,
  },
  data() {
    return {
      searchModel: {
        keyword: "",
      },
      tagList: [],
      sortList: [],
    };
  },
  mounted() {
    this.initEmoji();
    this.getTagList();
    this.getSortList();
  },
  methods: {
    ...mapMutations(['initEmoji']),
    async getSortList() {
      let resp = await SortApi.getSortLists();
      if (resp.status === 200) {
        this.sortList = resp.data.sort;
      } else {
        this.$message({
          message: "请求错误",
          type: "error",
        });
      }
    },
    async getTagList() {
      let resp = await TagApi.getTagLists();
      if (resp.status === 200) {
        this.tagList = resp.data.tags;
      } else {
        this.$message({
          message: "请求错误",
          type: "error",
        });
      }
    },
  },
  computed: {
    isAsideAlive: function () {
      return this.$route.meta.isAsideAlive;
    },
    footerContent: function () {
      return `© ${this.$dayjs().format("YYYY")} 刘文博/ Powered by Vue`;
    },
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
  color: $--text-color;
  background-color: $--background-color;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
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

.aside-item {
  margin-bottom: 10px;
}

.search {
  .el-card__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.aside-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
