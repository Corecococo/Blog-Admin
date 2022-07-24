<template>
  <el-table :data="categoryData" style="width: 100%;">
    <el-table-column prop="index" label="序号"></el-table-column>
    <el-table-column prop="category" label="分类名"></el-table-column>
    <el-table-column prop="articleNumber" label="文章数量"></el-table-column>
    <el-table-column label="管理">
      <template #default="scope">
        <el-button size="small">编辑</el-button>
        <el-popconfirm
            title="该操作会删除此分类下所有文章，确定删除吗？"
            confirm-button-type="danger"
        >
          <template #reference>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-button size="small" type="primary" @click="dialogVisible=true">创建分类</el-button>
  <el-dialog
      v-model="dialogVisible"
      title="创建分类"
      width="30%"
  >
   <el-form>
     <el-form-item label="分类名">
       <el-input></el-input>
     </el-form-item>
   </el-form>

    <template #footer>
      <el-button @click="createCategory" type="primary" size="small">确定</el-button>
      <el-button @click="cancleCreate" size="small">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
const dialogVisible = ref(false)
const categoryData = [
  {
    index: 1,
    category: 'HTML5',
    articleNumber: 5
  },
  {
    index: 2,
    category: 'CSS3',
    articleNumber: 5
  },
  {
    index: 3,
    category: 'Vue3',
    articleNumber: 5
  }
]

let createCategory = ()=>{
  dialogVisible.value = false;
}

let cancleCreate = ()=>{
  dialogVisible.value = false;
}
</script>

<style scoped>
.el-table {
  margin-bottom: 1rem;
}
</style>