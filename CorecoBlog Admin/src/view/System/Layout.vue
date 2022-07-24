<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <LeftNav></LeftNav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "../../components/HeaderNav.vue";
import LeftNav from "../../components/LeftNav.vue";
import {onMounted} from "vue";
import {ElNotification} from "element-plus/es";

onMounted(()=>{
  ElNotification({
    title: 'Coreco',
    message: '欢迎回来！',
    type: 'success',
  })
});
</script>

<style scoped>
:deep(.el-form-item__label){
  justify-content: center;
}

.el-aside{
  margin-top: .5rem;
}
</style>