<!--@name: index-->
<!--@author: grit-->
<!--@date: 2021/8/7 15:16-->
<!--@description：index-->
<!--@update: 2021/8/7 15:16-->
<!--@FilePath: src/views/project-->

<template>
    <div class="project">
      <el-row :gutter="10" class="waterfall" ref="waterfall">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="box">
          <Framework :header="true" :border="true" shadow="hover" footer>
            <div slot="header">时代大厦多</div>
            <img src="http://qiniu.dreamsakula.top/images/20201218114206.jpg" alt="" width="100%" style="object-fit: contain">
            <div slot="footer" style="width: 100%;padding:0 10px">
              <div style="text-align:right">2020-12-02</div>
              <div style="padding-bottom: 10px">
                <el-tag style="margin-right: 5px" effect="plain" :key="tag.id" v-for="tag in tagList.slice(0,7)">
                  {{ tag }}
                </el-tag>
              </div>
            </div>
          </Framework>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tagList: [
        12, 3213, 321312312, 313123123123,
        12, 3213, 321312312, 313123123123,
        12, 3213, 321312312, 313123123123,
      ],
      projectList: [
        {
          name: 'project1',
          url: '',
          imgUrl: '',
          createTime: '',
          completeTime: '',
          skillStack: []
        }
      ],
    }
  },
  mounted() {
    window.onresize = (e ) => {
      if(window.innerWidth < 992){
        this.$refs.waterfall.$el.style.columnCount = 1
      }else{
        this.$refs.waterfall.$el.style.columnCount = 2
      }

    }
  }
}
</script>

<style scoped lang="scss">
.el-col {
  margin-bottom: 10px;
}

.el-card {
  background-color: transparent;
}

.box{
  width:100%;
  height:100%;
  -moz-page-break-inside:avoid;
  -webkit-column-break-inside:avoid;
  break-inside:avoid;
}

.waterfall {
  -moz-column-count:2;
  /* Firefox */
  -webkit-column-count:2;
  /* Safari 和 Chrome */
  column-count:2;
  -moz-column-gap:1em;
  -webkit-column-gap:1em;
  column-gap:1em;
}


</style>