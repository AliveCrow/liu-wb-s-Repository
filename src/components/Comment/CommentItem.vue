<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <section>
    <div class="comment-header">
      <div class="avatar">
        <img
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          alt=""
        />
      </div>
      <div class="comment-user-info">
        <span class="comment-user-name">UserName</span>
        <span class="comment-user-time">2021=03-21</span>
      </div>
    </div>
    <div class="comment-content">
      <span class="reply-to">@UserName</span
      >曾经接入过百度云加速，节点速度真的是不敢恭维，
      这么多年了不知道变好了没有，博主最近是流量大增了吗，感觉访问速度有点慢。
      曾经接入过百度云加速，节点速度真的是不敢恭维，
      这么多年了不知道变好了没有，博主最近是流量大增了吗，感觉访问速度有点慢。
      曾经接入过百度云加速，节点速度真的是不敢恭维，
      这么多年了不知道变好了没有，博主最近是流量大增了吗，感觉访问速度有点慢。
      曾经接入过百度云加速，节点速度真的是不敢恭维，
      这么多年了不知道变好了没有，博主最近是流量大增了吗，感觉访问速度有点慢。
      <div>
        <el-button class="comment-reply">回复</el-button>
      </div>
      <CommentForm></CommentForm>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import CommentForm from "@/components/Comment/CommentForm";
export default {
  name: "CommentItem",
  components: {
    CommentForm,
  },
};
</script>

<style scoped lang="scss">
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
</style>
