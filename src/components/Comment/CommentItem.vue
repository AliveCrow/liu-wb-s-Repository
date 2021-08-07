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
        <span class="comment-user-name">{{comment.username}}</span>
        <span class="comment-user-time">{{$dayjs(comment.createTime).format('YYYY-MM-DD hh:mm:ss')}}</span>
      </div>
    </div>
    <div class="comment-content">
      <span class="reply-to" v-if="!!comment.responder">@UserName</span
      >{{comment.content}}
      <div>
        <el-button class="comment-reply" @click="handleReplay = !handleReplay">回复</el-button>
      </div>
      <CommentForm v-show="handleReplay" @submitComment="submitComment"></CommentForm>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import CommentForm from "@/components/Comment/CommentForm";

export default {
  name: "CommentItem",
  props:['comment'],
  components: {
    CommentForm,
  },
  data(){
    return {
      handleReplay:false,
    }
  },
  methods:{
    submitComment(form){
        this.$log.print(form)
    }
  }
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
