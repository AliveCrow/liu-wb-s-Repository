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
        <ul class="timeline">
          <li class="timeline-header">2020年02月</li>
          <div class="timeline-body">
            <li class="timeline-body-item">
              <div class="timeline-body-date">22日</div>
              <div class="timeline-dot"></div>
              <div>
                <a class="timeline-body-content">内容</a>
              </div>
            </li>
          </div>
          <li class="timeline-header">2020年03月</li>
          <div class="timeline-body">
            <li class="timeline-body-item">
              <div>22ri</div>
              <div class="timeline-dot"></div>
              <div>
                <span>三角</span>
                <span>内容</span>
              </div>
            </li>
          </div>
          <li>2020-02-14</li>
          <div>
            <li>学习、实习与其它</li>
            <li>学习、实习与其它</li>
            <li>学习、实习与其它</li>
          </div>
          <li>2020-02-15</li>
          <div>
            <li>学习、实习与其它</li>
            <li>学习、实习与其它</li>
          </div>

        </ul>
      </div>
    </Framework>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped lang="scss">
.timeline{
  &-header{
    font-size:1rem;
    background-color: #555;
    display:inline;
    color: #fff;
    padding:5px;
    border-radius:5px;
  }
  &-dot{
    height:10px;
    width:10px;
    margin:0 10px;
    background-color: #555;
    border-radius:50%;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    &::before{
      content: '';
      display: block;
      position: absolute;
      bottom: 15px;
      width:5px;
      background-color:#555;
      height:40px
    }
    &::after{
      content: '';
      display: block;
      position: absolute;
      top: 15px;
      width:5px;
      background-color:#555;
      height:40px
    }
  }
  &-body{
    height:100px;
    position:relative;
    &-item{
      position:absolute;
      top: 50%;
      transform: translateY(-50%);
      display:flex;
      align-items: center;

    }
    &-date{
    }
    &-content{
      background-color: $--text-color;
      color:#FFF;
      padding: 10px 15px;
      border-radius:6px;
      margin-left:20px;
      position:relative;
      &:before{
        content:'';
        position:absolute;
        width:0;
        height:0;
        display:block;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        border-style:solid;
        border-width: 10px;
        border-color: transparent $--text-color transparent transparent;
      }
    }
  }
}

</style>
