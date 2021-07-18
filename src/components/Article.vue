<template>
  <div>
    <Framework
      style="margin-bottom: 20px"
      :border="false"
      :footer="true"
      v-for="article in articleList"
      :key="article.id"
    >
      <div slot="header" class="header">
        {{ article.title }}
      </div>
      <div class="content">
        {{ article.content }}
      </div>
      <template slot="footer">
        <div>
          标签:
          <span v-for="(tag, index) in article.tags" :key="index">{{
            tag
          }}</span>
        </div>
        <div>Time:{{ article.createTime }}</div>
        <div>Comment:{{ article.commentNum }}条评论</div>
      </template>
    </Framework>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["articleList"],
};
</script>

<style scoped lang="scss">
.header {
  font-size: 1.4rem;
  cursor: pointer;
}
.content {
  display: -webkit-box; /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
  -webkit-box-orient: vertical; /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
  -webkit-line-clamp: 2; /*行数，超出三行隐藏且多余的用省略号表示...*/
  word-break: break-all;
  overflow: hidden;
  max-width: 100%;
  color: $--second-text-color;
}
</style>
