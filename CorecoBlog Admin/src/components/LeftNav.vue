<template>
<el-menu default-active="1-1"
         class="el-menu-vertical-demo"
         :collapse="isCollapse">

  <el-sub-menu index="1" >
    <template #title>
      <el-icon><House /></el-icon>
      <span>首页</span>
    </template>
    <el-menu-item index="1-1" @click="refresh('/coco/home')">网站概览</el-menu-item>
    <el-menu-item index="1-2" @click="refresh('/coco/workbench')">工作台</el-menu-item>
  </el-sub-menu>

  <el-menu-item index="2" @click="refresh('/coco/blogpublish')">
    <el-icon><Position /></el-icon>
    <span>博客发布</span>
  </el-menu-item>

  <el-sub-menu index="3">
    <template #title>
      <el-icon><Operation /></el-icon>
      <span>博客管理</span>
    </template>
    <el-menu-item index="3-1" @click="refresh('/coco/categorymanager')">
      <span>分类管理</span>
    </el-menu-item>
    <el-menu-item index="3-2" @click="refresh('/coco/articlemanager')">
      <span>文章管理</span>
    </el-menu-item>
  </el-sub-menu>

  <el-menu-item index="4" @click="refresh('/coco/sysmanager')">
    <el-icon><Setting /></el-icon>
    <span>系统管理</span>
  </el-menu-item>
</el-menu>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router";
let isCollapse = ref(false)
let handleOpen = (key:string,keyPath:string[])=>{}
let handleClose = (key:string,keyPath:string[])=>{}
let router = useRouter();
let refresh = (path:string)=>{
  router.push(path);
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
:deep(.el-menu-item) {
  justify-content: flex-start;
  text-align: center;
}
</style>