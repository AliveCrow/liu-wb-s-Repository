<template>
  <div>
    <PageHeader @back="handleBack" content="页面详情" />
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
      />
    </Framework>
    <Framework
      :header="false"
      :border="false"
      shadow="never"
      style="margin-top: 10px"
    >
      <header>发表评论</header>
      <CommentForm></CommentForm>
      <CommentContainer>
        <CommentItem>
          <CommentItem></CommentItem>
        </CommentItem>
      </CommentContainer>
    </Framework>
  </div>
</template>

<script>
import PageHeader from "@/components/Layout/PageHeader";
import Info from "@/components/Info";
import { getWindowScrollHeight } from "@/utils/index";
import CommentForm from "@/components/Comment/CommentForm";
import CommentContainer from "@/components/Comment/CommentContainer";
import CommentItem from "@/components/Comment/CommentItem";

export default {
  name: "Detail",
  components: {
    PageHeader,
    Info,
    CommentForm,
    CommentContainer,
    CommentItem,
  },
  data() {
    return {
      commentText: "",
      value: `确认下本地仓库关联的远程地址：git remote -v

本地切换到需要提交的分支 git checkout xxx

本地git仓库切换/关联天梯远程git仓库：git remote set-url origin 远程仓库地址

注意：远程仓库地址必须用http地址

git remote -v 确认远程仓库是否切换

---------------------------------

切换完仓库后不要急着push

去天梯对应仓库新建分支

![](http://markdown-image-space.dreamsakula.top/image/20210618140147.png)

push你的本地代码

> 如果在pull 过程中报错：fatal: refusing to merge unrelated histories;
> 可以用git pull --allow-unrelated-histories 药到病除好了;
> 合并冲突后，接下来可以开心的push了（push提示输入的用户名/密码就是天梯的账号密码）


\`\`\`js
export default {
  bind (el, binding) {
    // 双击触发复制
    if (binding.modifiers.dblclick) {
      el.addEventListener('dblclick', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    }
    // 点击icon触发复制
    else if (binding.modifiers.icon) {
      if (el.hasIcon) return
      const iconElement = document.createElement('i')
      iconElement.setAttribute('class', 'el-icon-document-copy')
      iconElement.setAttribute('style', 'margin-left:5px')
      el.appendChild(iconElement)
      el.hasIcon = true
      iconElement.addEventListener('click', () => handleClick(el.innerText))
      iconElement.style.cursor = 'copy'
    }
    // 单击触发复制
    else {
      el.addEventListener('click', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    }
  }
}


\`\`\`
# 12312
\`\`\`js
export default {
  bind (el, binding) {
    // 双击触发复制
    if (binding.modifiers.dblclick) {
      el.addEventListener('dblclick', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    }
    // 点击icon触发复制
    else if (binding.modifiers.icon) {
      if (el.hasIcon) return
      const iconElement = document.createElement('i')
      iconElement.setAttribute('class', 'el-icon-document-copy')
      iconElement.setAttribute('style', 'margin-left:5px')
      el.appendChild(iconElement)
      el.hasIcon = true
      iconElement.addEventListener('click', () => handleClick(el.innerText))
      iconElement.style.cursor = 'copy'
    }
    // 单击触发复制
    else {
      el.addEventListener('click', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    }
  }
}


\`\`\`

`,
      editorOptions: {
        boxShadow: false,
        subfield: false, //true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
        defaultOpen: "preview",
        editable: false, //是否允许编辑
        toolbarsFlag: false, //工具栏是否显示
        codeStyle: "atom-one-dark",
        previewBackground: "#fff",
      },
    };
  },
  created() {},
  mounted() {
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
    }, 500);
  },
  methods: {
    handleBack() {
      this.log("handleBack");
    },
    click(e) {},
  },
  watch: {},
};
</script>

<style scoped lang="scss">
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
