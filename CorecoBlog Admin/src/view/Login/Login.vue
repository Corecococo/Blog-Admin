<template>
<div class="co-login-container">
<LoginForm></LoginForm>
</div>
</template>

<script setup lang="ts">
import LoginForm from "./LoginForm.vue";
</script>

<style scoped>
.co-login-container {
  min-height: 100vh;
  overflow: auto;
  width: 100%;
  background-image: url("../../assets/svgs/bg-login.svg");
  background-size: cover;
  background-position: center;

}
</style>