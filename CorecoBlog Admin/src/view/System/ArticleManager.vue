<template>
    <el-table
        :data="articleData"
        style="width: 100%;"
    >
      <el-table-column prop="index" label="序号"></el-table-column>
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column prop="category" label="分类"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="publishDateTime" label="发布时间"></el-table-column>
      <el-table-column label="管理" fixed="right" width="200">
        <template #default="scope">
          <el-button size="small" type="primary">查看</el-button>
          <el-button size="small" >编辑</el-button>
          <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              confirm-button-type="danger"
              title="你确定删除该文章吗？"
              @confirm="confirmEvent"
              @cancel="cancelEvent">
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

</template>

<script setup lang="ts">
import {ref} from "vue";

let articleData = [
  {
    index: 1,
    title:"关于本站",
    category:"HTML5",
    author: "Coreco",
    publishDateTime:"2022-06-21"
  },
  {
    index: 2,
    title:"关于本站",
    category:"HTML5",
    author: "Coreco",
    publishDateTime:"2022-06-21"
  },
  {
    index: 3,
    title:"关于本站",
    category:"HTML5",
    author: "Coreco",
    publishDateTime:"2022-06-21"
  },{
    index: 4,
    title:"关于本站",
    category:"HTML5",
    author: "Coreco",
    publishDateTime:"2022-06-21"
  }
];

/*TODO 确定删除文章的方法*/
const confirmEvent = ()=>{

}

/*TODO 取消删除文章的方法*/
const cancelEvent = ()=>{

}
</script>

<style scoped>

</style>