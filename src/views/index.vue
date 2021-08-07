<template>
  <div class="homepage">
    <Article v-if="articleList.length > 0" :articleList="articleList" />
    <el-skeleton v-else :rows="5" animated />
    <Page
      :total="total"
      :pageSize="pageSize"
      :currentPage="currentPage"
      @currentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import Page from "@/components/Layout/Page";
import Article from "@/components/Article";
import { ArticleApi, TagApi } from "@/api";

export default {
  name: "index",
  components: {
    Page,
    Article,
  },
  data() {
    return {
      articleList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  created() {
    this.getArticleList();
    TagApi.getTagLists().then((res) => {
      this.$log.print(res);
    });
  },
  methods: {
    handleCurrentChange(currentPage) {
      this.$log.print(currentPage);
    },
    async getArticleList() {
      let resp = await ArticleApi.getArticleLists();
      this.$log.print(resp);
      let { total, pageSize, currentPage } = resp.data;
      if (resp.status === 200) {
        this.articleList = resp.data.articles;
        this.total = total;
        this.pageSize = pageSize;
        this.currentPage = currentPage;
      } else {
        this.$message({
          message: "请求错误",
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.homepage {
  width: 100%;
}
</style>
