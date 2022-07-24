<template>
  <div class="co-login-form">
    <div class="login-title" style="padding-bottom: 1rem">
      <img alt="logo" src="../../assets/svgs/logo.svg">
      <span style="font-weight: 600;font-size: 2rem;padding-left: .5rem">CorecoBlog Admin</span>
    </div>
    <form>
      <div class="form-item">
        <label>用户名</label>
        <input placeholder="请输入用户名" type="text" v-model="user">
      </div>
      <div class="form-item">
        <label>密码</label>
        <input placeholder="请输入密码" type="password" v-model="password">
      </div>

      <el-button v-if="!isLoading" type="primary" @click="login">Sign In</el-button>
      <el-button v-if="isLoading" type="primary" :loading-icon="Eleme" loading>Loading</el-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {Eleme} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {ElNotification} from "element-plus/es";

let isLoading = ref(false);
let user = ref("");
let password = ref("");
let router = useRouter();
let login = () => {
  //先进行表单验证
  if (user.value===""||password.value===""){
    ElNotification({
      title: "Error",
      message: "用户名和密码不能为空！",
      type:"error"
    });
  }else{
    isLoading.value = true;
    setTimeout(() => {
      console.log('redirect');
      router.push("/coco/home");
    }, 1000);
  }

}
</script>

<style scoped>
.co-login-form {
  width: 500px;
  box-shadow: var(--co-box-shadown);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8%;
  padding: 1.5rem;
  background-color: white;
}

.form-item {
  height: 2.2rem;
  font-size: 1.25rem;
  padding: .5rem 0;
}

.form-item label {
  display: inline-block;
  width: 4rem;
}

.form-item input {
  margin-left: .5rem;
  line-height: 1.25rem;
  font-size: 1rem;
  padding: 4px;
  caret-color: var(--co-color-primary);
  border: 1px solid var(--co-color-info);
  border-radius: 4px;
  transition: border linear .2s;
  display: inline-block;
  width: calc(100% - 5.5rem);
}

.form-item input:hover {
  border: 1px solid;
}

.form-item input:focus {
  outline: none;
  border: 1px solid var(--co-color-primary);
}

.el-button {
  display: inline-block;
  width: calc(100% - .3rem);
}

:deep(.el-button.el-button--primary span) {
  font-size: 1rem;
}

:deep(.el-icon.is-loading){
  font-size: 1rem;
}
</style>