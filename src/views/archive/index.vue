<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <div>
    <Framework :border="false" shadow="never">
      <div slot="header">
        <i class="el-icon-takeaway-box"></i>
        文章归档
      </div>
      <div>
        <p>目前共计 12 篇日志，共 873 条评论，加油啊~</p>
        <TimelineBox>
          <TimelineItem
            v-for="item in Timeline"
            :date="item.date"
            :articleList="item.articleList"
          ></TimelineItem>
        </TimelineBox>
      </div>
    </Framework>
  </div>
</template>

<script>
import TimelineBox from "@/components/Timeline/TimelineBox";
import TimelineItem from "@/components/Timeline/TimelineItem";

export default {
  name: "index",
  components: {
    TimelineBox,
    TimelineItem,
  },
  data() {
    return {
      Timeline: [],
    };
  },
  created() {
    this.$axios("/timeline").then((res) => {
      this.$log.print(res);
      this.Timeline = res.data.timeline;
    });
  },
};
</script>

<style scoped lang="scss"></style>
