<template>
  <div class="coco-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>服务器状态</span>
        </div>
      </template>
      <div class="box-card-body">
        <div class="card-item-hardware">
          <span class="hardware-info">OS版本：{{osVersion}}</span>
          <span class="hardware-info">CPU型号：{{cpuModel}}</span>
          <span class="hardware-info">内存大小：{{memorySize}}</span>
          <span class="hardware-info">磁盘容量：{{diskSize}}</span>
        </div>
        <div class="card-item">
          <el-progress type="dashboard" :percentage="cpuPercentage" :color="colors">
            <template #default="{percentage}">
              <span class="percentage-value">{{ percentage }}%</span>
              <span class="percentage-label">CPU利用率</span>
            </template>
          </el-progress>
        </div>
        <div class="card-item">
          <el-progress type="dashboard" :percentage="memoryPercentage" :color="colors">
            <template #default="{percentage}">
              <span class="percentage-value">{{ percentage }}%</span>
              <span class="percentage-label">内存利用率</span>
            </template>
          </el-progress>
        </div>

        <div class="card-item">
          <el-progress type="dashboard" :percentage="diskPercentage" :color="colors">
            <template #default="{percentage}">
              <span class="percentage-value">{{ percentage }}%</span>
              <span class="percentage-label">磁盘利用率</span>
            </template>
          </el-progress>
        </div>
      </div>
    </el-card>
  </div>

    <div class="coco-tabs">
      <el-tabs v-model="activeName" @tab-click="handleTabsClick">
        <el-tab-pane label="访问日志" name="first" >
          <div>
            <el-empty description="暂无日志"></el-empty>
          </div>
        </el-tab-pane>
        <el-tab-pane label="告警信息" name="second" :lazy="true">
          <div>
            <el-empty description="暂无告警"></el-empty>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {randomInt} from "crypto";

const osVersion = ref("Windows 11 专业版");
const cpuModel = ref("i5-12600KF ");
const memorySize = ref("32G");
const diskSize = ref("3T");
const activeName = ref("first");
let cpuPercentage = ref(0);
let memoryPercentage = ref(48);
let diskPercentage = ref(30);
const colors = [
  { color: '#5cb87a', percentage: 20 },
  { color: '#1989fa', percentage: 40 },
  { color: '#6f7ad3', percentage: 60 },
  { color: '#e6a23c', percentage: 80 },
  { color: '#f56c6c', percentage: 100 }
];

onMounted(()=>{
  setInterval(()=>{
    cpuPercentage.value = 4 + Math.ceil(Math.random()*6);
    memoryPercentage.value = 40 + Math.ceil(Math.random()*20);
  },500);
});
</script>

<style scoped>
.coco-container{
  width: 100%;
}
.box-card{
  margin-bottom: 1rem;
}

.box-card-body{
  display: flex;
  justify-content: space-between;
}

.card-item{
  width: 25%;
  justify-content: center;
  display: flex;
}

.percentage-value{
  display: block;
  font-size: 1.5rem;
}

.percentage-label{
  display: block;
  margin-top: .875rem;
}

.hardware-info{
  display: block;
  margin-bottom: 1rem;
}

.el-tabs {
  box-shadow: var(--el-box-shadow-light);
  padding: 0 1rem;
  min-height: 500px;
}

:deep(.el-tabs__item.is-top){
  font-size: 1.25rem;
}


</style>