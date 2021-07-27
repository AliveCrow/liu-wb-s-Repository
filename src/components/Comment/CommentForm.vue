<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <div class="comment-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4 }"
      placeholder="都看到这里了,不来摆龙门阵?"
      v-model="commentText"
    >
    </el-input>
    <div class="comment-info">
      <el-input
        v-model="input1"
        placeholder="不想让人认识你嘛ㄟ(▔,▔)ㄏ(必填)"
      ></el-input>
      <el-input
        v-model="input2"
        placeholder="不留个联系方式吗☃会保密的d(･｀ω´･d*)"
      ></el-input>
      <el-input
        v-model="input3"
        placeholder="_(:з」∠)_不想搞个博客吗"
      ></el-input>
    </div>
    <el-popover placement="bottom" width="200" trigger="click">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
      <el-button slot="reference">表情</el-button>
    </el-popover>
    <el-button class="comment-btn">评论</el-button>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
};
</script>

<style scoped lang="scss">
.comment-form {
  padding: 5px 0;
  .comment-info {
    display: flex;
    gap: 20px;
    margin: 20px 0;
  }
  .comment-btn {
    margin-left: 10px;
  }
}
</style>
