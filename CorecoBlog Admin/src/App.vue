<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --co-box-shadown: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
  --co-color-primary: #409EFF;
  --co-color-success: #67C23A;
  --co-color-warning: #E6A23C;
  --co-color-danger: #F56C6C;
  --co-color-info: #909399;
}

@font-face {
  font-family: 'iconfont';  /* Project id 3124623 */
  src: url('./assets/font/iconfont.woff2') format('woff2'),
  url('./assets/font/iconfont.woff') format('woff'),
  url('./assets/font/iconfont.ttf') format('truetype');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
</style>
