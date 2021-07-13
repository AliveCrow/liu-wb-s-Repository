<template>
  <div ref="link-to-page-a">
    <router-link :to="{...route}">
      <div >
        <slot></slot>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LinkToPage",
  props:{
    route:{
      type:Object,
      required:true,
      default:()=>{
        return {
          path:null,
          name:null
        }
      }
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #fff;
}
</style>