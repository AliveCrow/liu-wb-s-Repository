<template>
  <el-card class="box-card" :body-style="bodyStyle" :shadow="shadow" :style="border?'':'border:none'">
    <div v-if="header" slot="header" class="clearfix">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  name: "Framework",
  props:{
    header:{
      type:Boolean,
      default:true
    },
    bodyStyle:{
      type:String,
      default:''
    },
    shadow:{
      type:String,
      default:'always'
    },
    border:{
      type:Boolean,
      default:true
    }
  }
      // ['header','bodyStyle','shadow','border']
  /**
   * @params shadow {String}  always / hover / never
   */
}
</script>

<style scoped>

</style>