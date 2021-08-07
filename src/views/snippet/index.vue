<!--
 * @Description: 输入文件描述信息
 * @Author: $
 * @createDate: $ 
 * @FilePath:  $
-->
<template>
  <div>
    <div class="snippet-wrapper">
      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <Framework
            bodyStyle="background-color: #282c34;color: #fff"
            class="snippet"
            :header="false"
            :footer="false"
            @click.native="showDialog"
          >
            CSS溢出
          </Framework>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <Framework
            bodyStyle="background-color: #282c34;color: #fff"
            class="snippet"
            :header="false"
            :footer="false"
            @click.native="showDialog"
          >123</Framework>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <Framework
            bodyStyle="background-color: #282c34;color: #fff"
            class="snippet"
            :header="false"
            :footer="false"
            @click.native="showDialog"
          >456</Framework>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="CSS溢出"
      :visible.sync="dialogVisible"
      append-to-body
      fullscreen
    >
      <pre v-highlightjs>
               <code class="javascript" style="text-align:left;">
                 {{ code }}
               </code>
              </pre>
      <span slot="footer" class="dialog-footer">
        <el-button size="default" type="text" @click="copy">复制代码</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getWindowScrollHeight } from "@/utils";

export default {
  name: "index",
  data() {
    return {
      dialogVisible: false,
      code: '',
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    copy() {
      this.$copyText(this.code).then(
        (e) => {
          this.$message({
            type: "success",
            message: "复制成功",
            offset: getWindowScrollHeight(window.parent) + 20,
          });
          this.dialogVisible = false;
        },
        (e) => {
          this.$message({
            type: "error",
            message: "无法复制",
            offset: getWindowScrollHeight(window.parent) + 20,
          });
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.el-dialog {
  max-height: 100vh;
}

pre {
  background-color: #282c34;
}

code {
  overflow: auto;
  max-height: calc(100vh - 250px);
  padding: 10px;
  line-height: 1.2rem;

  &::-webkit-scrollbar {
    width: 8px;
    background: #282c34;
  }

  &::-webkit-scrollbar-corner,
    /* 滚动条角落 */
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    /*滚动条的轨道*/
    border-radius: 4px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background-color: rgba(180, 160, 120, 0.1);
    box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
  }

  &::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    background-color: $--border-color;
  }
}

.snippet-wrapper {
  //display: flex;
  //justify-content: space-between;
  //gap: 1rem;

  .snippet {
    //flex-grow: 1;
  }

  .snippet-item {
    background-color: #fff;
  }
}
</style>
