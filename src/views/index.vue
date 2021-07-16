<template>
  <div class="homepage"  >
      <Framework :border="false" :footer="true">
        <div slot="header" class="header">
          Echo主题更新啦！强大无敌高定制化2.0主题重造出炉。
        </div>
        <div class="content">
          Typecho 默认不支持 Emoji 表情，这不是程序的锅，而是由于编码的问题造成，Emoji 是一种在 Unicode 位于\u1F601-\u1F64F区段的字符。这显然超出了目前常用的 UTF-8 字符集的编码范围\u0000-\uFFFF。在 MySQL 中，UTF-8 只支持最多 3 个字节，而 Emoji 是 4 个字节。所以评论中带有 Emoji 表情才会报错。
          我们只需简单两步即可让 typecho 支持 emoji 表情评论，只要将默认的数据库编码 utf8 修改为 utf8mb4 即可。
          1.修改评论内容字段的编码
          使用数据库管理工具，找到 typecho_comments 评论表的 text 字段，将该字段的编码改为 utf8mb4_general_ci。
          2.修改数据库配置文件
          打开网站根目录数据库配置文件 config.inc.php
          将 charset 的值由 utf8 改为 utf8mb4。
        </div>
        <template slot="footer" >
          <div>标签:liu-wb</div>
          <div>Time:2021-07-16</div>
          <div>Comment:12条评论</div>
        </template>
      </Framework>
    <Page :total="100" :pageSize="10" :currentPage="1" />

  </div>
</template>

<script>
import Page from "@/components/Page";
export default {
  name: "index",
  components:{
    Page
  },
  created() {
    this.$axios('/articles').then(res=>{
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
.homepage {
  .header{
    font-size: 1.4rem;
    cursor:pointer;
  }
  .content{
    display: -webkit-box; /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
    -webkit-box-orient: vertical; /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
    -webkit-line-clamp: 2; /*行数，超出三行隐藏且多余的用省略号表示...*/
    word-break: break-all;
    overflow: hidden;
    max-width: 100%;
    color: $--second-text-color;
  }
}

</style>