<template>
  <el-card
    class="box-card"
    :body-style="bodyStyle"
    :shadow="shadow"
    :style="border ? '' : 'border:none'"
  >
    <div v-if="header" slot="header" class="clearfix">
      <slot name="header"></slot>
    </div>
    <div style="width: 100%" class="card-body">
      <slot></slot>
    </div>
    <div v-if="footer">
      <Info>
        <slot name="footer"></slot>
      </Info>
    </div>
    <!--    <div v-if="footer" class="framework-footer">-->
    <!--      -->
    <!--    </div>-->
  </el-card>
</template>

<script>
import Info from "@/components/Info";
export default {
  name: "Framework",
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    bodyStyle: {
      type: String,
      default: "",
    },
    shadow: {
      type: String,
      default: "hover",
    },
    border: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Info,
  },
  // ['header','bodyStyle','shadow','border']
  /**
   * @params shadow {String}  always / hover / never
   */
};
</script>

<style scoped lang="scss">
.box-card {
  line-height: 2rem;
  text-align: left;

  .framework-footer {
    margin-top: 20px;
    cursor: default;
    height: 20px;
    line-height: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    color: $--second-text-color;
    font-size: 0.8rem;
  }
}
</style>
