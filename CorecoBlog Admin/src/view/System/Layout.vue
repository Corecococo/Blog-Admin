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
          <router-view v-slot="{Component,route}">
            <transition name="fade" mode="out-in">
<!--踩坑,vue3的组件不要求模板文件有根元素，但如果要使用过渡，则该组件必须有根元素-->
               <div :key="route.meta.name">
                 <component :is="Component"></component>
               </div>
            </transition>
          </router-view>
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
/*踩坑，vueRouter使用过渡动效时，定义过渡的name之后，必须添加个应用于进入与离开过渡效果的CSS样式*/

/*组件进入期间过渡*/
.fade-enter-active,

/*组件离开期间过渡*/
.fade-leave-active {
  transition: opacity 0.5s ease;
}

/*组件进入的起始状态*/
.fade-enter-from,

/*组件离开后的结束状态*/
.fade-leave-to {
  opacity: 0;
}
</style>