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
            <el-tab-pane :key="key" v-for="(value,key,index) in emojiList" :label="key" :name="key">
              <ul>
                <li v-for="item in value" :key="item.char" style="float:left" @click="handleClick(item)"
                    class="emoji-item">
                 {{ item.char }}
                </li>
              </ul>
            </el-tab-pane>
            <!--            <el-tab-pane label="Nature" name="Nature">Nature</el-tab-pane>-->
            <!--            <el-tab-pane label="Objects" name="Objects">Objects</el-tab-pane>-->
            <!--            <el-tab-pane label="Places" name="Places">Places</el-tab-pane>-->
            <!--            <el-tab-pane label="Symbols" name="Symbols">Symbols</el-tab-pane>-->
          </el-tabs>
          <el-button slot="reference">表情</el-button>
        </el-popover>
        <el-button class="comment-btn" @click="handleComment('commentForm')" type="submit">评论</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>
<script>

import {mapState} from "vuex";

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
      activeName: 'people',

    }
  },
  computed: {
    ...mapState(['emojiList'])
  },

  mounted() {
    this.activeName = 'people'
  },
  methods: {
    handleClick(val) {
      this.$log.pretty('Click', val.char)
    },
    handleComment(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('submitComment', this.commentForm)
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
li.emoji-item {
  padding: 5px 10px
}

li {
  transition: all 0.08s ease;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    box-shadow: 0 0 1px rgba(#000, .5);
    border-radius: 4px;

  }
}

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
