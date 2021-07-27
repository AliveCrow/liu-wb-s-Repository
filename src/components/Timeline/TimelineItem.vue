<template>
  <div>
    <!--    //todo item有多个时item的高度-->
    <li class="timeline-header">{{ date }}</li>
    <div
      class="timeline-body"
      :key="index"
      v-for="(item, index) in articleList"
    >
      <li class="timeline-body-item">
        <div class="timeline-body-date">{{ item.date }}</div>
        <div class="timeline-dot"></div>
        <!--        <div class="timeline-body-content">-->
        <Framework :header="false" class="timeline-body-content">
          {{ item.title }}
          <!--            <a >{{item.title}}</a>-->
        </Framework>
        <!--        </div>-->
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineItem",
  props: ["date", "articleList"],
};
</script>

<style scoped lang="scss">
.timeline {
  &-header {
    font-size: 1rem;
    background-color: #555;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    min-width: 100px;
    display: inline-block;
    text-align: center;
  }
  &-dot {
    height: 10px;
    width: 10px;
    margin: 0 10px;
    background-color: #555;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 15px;
      width: 5px;
      background-color: #555;
      height: 50px;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 15px;
      width: 5px;
      background-color: #555;
      height: 50px;
    }
  }
  &-body {
    height: 100px;
    position: relative;
    &-item {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      left: 7px;
    }
    &-date {
      min-width: 50px;
    }
    &-content {
      position: relative;
      margin-left: 20px;
      overflow: initial;

      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        display: block;
        left: -22px;
        top: 50%;
        transform: translateY(-50%);
        border-style: solid;
        border-width: 10px;
        border-color: transparent #ebeef5 transparent transparent;
      }
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        display: block;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        border-style: solid;
        border-width: 10px;
        border-color: transparent #fff transparent transparent;
      }
    }
  }
}
</style>
