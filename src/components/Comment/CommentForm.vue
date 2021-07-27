<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <div class="comment-form">
    <el-form :model="commentForm" :rules="rules" ref="commentForm">
      <el-form-item label="" prop="commentText">
        <el-input
            type="textarea"
            :autosize="{ minRows: 4 }"
            placeholder="都看到这里了,不来摆龙门阵?"
            v-model="commentForm.commentText"
        >
        </el-input>
      </el-form-item>
      <div class="comment-info">
        <el-form-item prop="username">
          <el-input
              v-model="commentForm.username"
              placeholder="不想让人认识你嘛ㄟ(▔,▔)ㄏ(必填)"
          ></el-input>
        </el-form-item>
        <el-form-item prop="contact" label="">
          <el-input
              v-model="commentForm.contact"
              prop="contact"
              placeholder="(选填)不留个联系方式吗☃会保密的d(･｀ω´･d*)"
          ></el-input>
        </el-form-item>
        <el-form-item prop="blog">
          <el-input
              v-model="commentForm.blog"
              prop="blog"
              placeholder="_(:з」∠)_不想搞个博客吗"
          ></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-popover placement="bottom" width="200" trigger="click">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿
            </el-tab-pane
            >
          </el-tabs>
          <el-button slot="reference">表情</el-button>
        </el-popover>
        <el-button class="comment-btn" @click="handleComment('commentForm')" type="submit">评论</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return {
      commentForm: {
        commentText: '',
        username: '',
        contact: '',
        blog: ''
      },
      rules: {
        commentText: [
          {required: true, message: '不评论别想提交(〃´皿`)q', trigger: 'blur'},
        ],
        username: [
          {required: true, message: '留下你痕迹再走QAQ', trigger: 'blur'},
        ],
        contact: [
          {required: false, message: '', trigger: 'blur'},
        ],
        blog: [
          {required: false, message: '', trigger: 'blur'},
        ]
      },
      activeName: ''

    }
  },
  methods: {
    handleClick(val) {
    },
    handleComment(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('submitComment',this.commentForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">


.comment-form {
  padding: 5px 0;

  .comment-info {
    display: flex;
    gap: 20px;
    margin: 20px 0;
    .el-form-item--small.el-form-item {
      flex-grow: 1;
    }

  }

  .comment-btn {
    margin-left: 10px;
  }
}
</style>
