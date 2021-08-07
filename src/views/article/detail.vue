<template>
  <div>
    <PageHeader @back="handleBack" content="页面详情"/>
    <Framework :header="false" :border="false" shadow="never">
      <template>
        <h2>
          百铁效从年构证会应置更高京力律老。门几须许克眼花流下那之系传领行平圆。飞合件必济机。
        </h2>
        <Info>
          <div>
            标签:12321
            <!--            <span v-for="(tag, index) in article.tags" :key="index">{{-->
            <!--                tag-->
            <!--              }}</span>-->
          </div>
          <div>Time:1111</div>
          <div>Comment:123条评论</div>
        </Info>
      </template>
      <mavon-editor
          ref="mavon-editor"
          v-model="value"
          :boxShadow="editorOptions.boxShadow"
          :subfield="editorOptions.subfield"
          :defaultOpen="editorOptions.defaultOpen"
          :editable="editorOptions.editable"
          :toolbarsFlag="editorOptions.toolbarsFlag"
          :codeStyle="editorOptions.codeStyle"
          :previewBackground="editorOptions.previewBackground"
          :externalLink="externalLink"
      />
    </Framework>
    <Framework
        :header="false"
        :border="false"
        shadow="never"
        style="margin-top: 10px"
    >
      <header>发表评论</header>
      <CommentForm @submitComment="submitComment"></CommentForm>
      <CommentContainer>
        <CommentItem v-for="(comment,index) in commentList" :key="comment.id" :comment="comment">
          <CommentItem v-for="(replay,index) in comment.replayList" :key="replay.id" :comment="replay"></CommentItem>
        </CommentItem>
<!--        <CommentItem>-->
<!--          <CommentItem></CommentItem>-->
<!--          <CommentItem></CommentItem>-->
<!--        </CommentItem>-->
<!--        <CommentItem></CommentItem>-->
        <Page
            style="text-align:center"
            :total="total"
            :pageSize="pageSize"
            :currentPage="currentPage"
            @currentChange="handleCurrentChange"
        />
      </CommentContainer>
    </Framework>
  </div>
</template>

<script>
import PageHeader from "@/components/Layout/PageHeader";
import Info from "@/components/Info";
import {getWindowScrollHeight} from "@/utils/index";
import CommentForm from "@/components/Comment/CommentForm";
import CommentContainer from "@/components/Comment/CommentContainer";
import CommentItem from "@/components/Comment/CommentItem";
import Page from "@/components/Layout/Page";
import {CommentApi} from "@api";

export default {
  name: "Detail",
  components: {
    PageHeader,
    Info,
    CommentForm,
    CommentContainer,
    CommentItem,
    Page
  },
  data() {
    return {
      total: 20,
      pageSize: 10,
      currentPage: 1,
      commentList:[],
      commentText: "",
      value: '',
      editorOptions: {
        boxShadow: false,
        subfield: false, //true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
        defaultOpen: "preview",
        editable: false, //是否允许编辑
        toolbarsFlag: false, //工具栏是否显示
        codeStyle: "atom-one-dark",
        previewBackground: "#fff",
      },
      externalLink:{
        markdown_css: function() {
          // 这是你的markdown css文件路径
          return '/mavon-editor/markdown-css/github-markdown.min.css'
        },
        hljs_js: function() {
          // 这是你的hljs文件路径
          return '/mavon-editor/highlight/highlight.min.js'
        },
        katex_css: function() {
          // 这是你的katex配色方案路径路径
          return '/mavon-editor/KaTex/katex.min.css'
        },
        katex_js: function() {
          // 这是你的katex.js路径
          return '/mavon-editor/KaTex/katex.min.js'
        }
      }
    };
  },
  created() {
    this.getCommentLists()

  },
  mounted() {
    this.setCopeIcon()
  },
  methods: {
    setCopeIcon(){
      setTimeout(() => {
        let preDOM = document.querySelectorAll(".v-show-content .hljs");
        preDOM.forEach((dom) => {
          let icon = document.createElement("i");
          icon.classList.add("el-icon-copy-document");
          icon.style.position = "absolute";
          icon.style.top = "10px";
          icon.style.right = "10px";
          icon.style.height = "50px";
          icon.style.fontSize = "1.5rem";
          dom.appendChild(icon);
          icon.onmouseenter = () => {
            icon.style.color = "#67c23a";
          };
          icon.onmouseleave = () => {
            icon.style.color = "#eee";
          };
          icon.onclick = (e) => {
            this.$copyText(e.target.previousElementSibling.textContent).then(
                (e) => {
                  this.$message({
                    type: "success",
                    message: "复制成功",
                    offset: getWindowScrollHeight(window.parent) + 20,
                  });
                },
                (e) => {
                  this.$message({
                    type: "error",
                    message: "无法复制",
                    offset: getWindowScrollHeight(window.parent) + 20,
                  });
                }
            );
          };
        });
        this.$forceUpdate()
      }, 2500);
    },
    async getCommentLists() {
      let resp = await CommentApi.getCommentLists()
      this.total = resp.data.total
      this.pageSize = resp.data.pageSize
      this.currentPage = resp.data.pageNum
      this.commentList = resp.data.comments
    },
    submitComment(form) {
      this.$log.print(form)
    },
    handleBack() {
      this.$router.push({name:"HomePage"})
    },
    handleCurrentChange(currentPage) {

    }
  },
  watch: {},
};
</script>

<style scoped lang="scss">
@import url('/mavon-editor/highlight/styles/atom-one-dark.min.css');
h2 {
  font-size: 2rem;
  line-height: 2.5rem;
}

.card-body {
  header {
    font-size: 1.2rem;
  }

  .comment-list-wrapper {
    margin-bottom: 40px;

    .comment-header {
      display: flex;
      height: 100px;
      align-items: center;
      gap: 20px;

      .avatar {
        height: 60px;
        width: 60px;
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }

      .comment-user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        line-height: 1.5rem;
      }

      .comment-user-time {
        font-size: 0.7rem;
        color: $--second-text-color;
      }
    }

    .comment-content {
      margin-left: 10px;
      font-size: 0.9rem;
      padding: 0 2rem;
      color: $--second-text-color;

      .comment-reply {
      }

      .reply-to {
        color: $--text-color;
        font-weight: 700;
        padding: 0 5px;
      }
    }
  }
}
</style>
