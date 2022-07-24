<template>
  <div class="header-nav-wrapper">
  <div class="header-nav-title">
    <img src="../assets/svgs/logo.svg" alt="logo">
    <span>CorecoBlog Admin</span>
  </div>
    <div class="header-nav">
      <div class="header-nav-item">
        <el-icon :size="'1.25rem'"><Search /></el-icon>
      </div>
      <div class="header-nav-item">
        <el-icon :size="'1.25rem'"><Bell /></el-icon>
      </div>
      <div class="header-nav-item">
        <el-dropdown>
          <img alt="face" src="../assets/images/face.jpg">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click="exitSys">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>
      <div class="header-nav-item">
        <el-icon :size="'1.25rem'"><Setting /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

let router = useRouter();
let exitSys = ()=>{
  router.push('/');
}
</script>

<style scoped>
.header-nav-wrapper{
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--el-border-color);
}

.header-nav-title{
  font-size: 1.25rem;
  position: relative;
  line-height: 60px;
  display: inline-block;
}
.header-nav-title img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.header-nav-title span {
  padding-left: 2.2rem;
}

.header-nav {
  float: right;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
}

.header-nav-item{
  height: 100%;
  padding: 0 .5rem;
  display: flex;
  align-items: center;
}

.header-nav-item:hover {
  cursor: pointer;
  background-color:  #f4f4f5;
}

.header-nav-item img {
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
}
</style>