<template>
    <el-table
        :data="blogList"
        style="width: 100%;"
    >
      <el-table-column prop="index" label="序号"></el-table-column>
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column prop="category" label="分类"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="publishTime" label="发布时间" min-width="150px"></el-table-column>
      <el-table-column prop="traffic" label="访问量"></el-table-column>
      <el-table-column label="管理" fixed="right" width="200">
        <template #default="scope">
          <a :href=scope.row.url target="_blank" style="margin-right: 12px">
            <el-button size="small" type="primary" >查看</el-button>
          </a>
          <el-button size="small" >编辑</el-button>
          <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              confirm-button-type="danger"
              title="你确定删除该文章吗？"
              @confirm="confirmEvent(scope.row.uuid)"
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
import {onBeforeMount, reactive, ref} from "vue";
import {BlogDto} from "../../model/blog";
import blog from "../../api/blog";
import router from "../../router";
import {ElNotification} from "element-plus/es";

let blogList:BlogDto[] = reactive([]);
const currentPage = ref(1);
const size = ref(10);

/*TODO 确定删除文章的方法*/
const confirmEvent = (uuid:string)=>{
  blog.deleteBlog(uuid).then(res=>{
    const data = res.data;
    if (data.success){
      ElNotification({
        title:"Success",
        message:data.message,
        type:"success"
      });
      blogList.length=0;
      refreshPage(currentPage.value,size.value);
    }else{
      ElNotification({
        title:"Fail",
        message:data.message,
        type:"error"
      });
    }

  },reason => {}).catch(err=>{})
};

/*TODO 取消删除文章的方法*/
const cancelEvent = ()=>{

};

const refreshPage = (currentPage:Number,size:Number)=>{
  blog.getBlogSummaryByPagination(currentPage,size).then(res=>{
    const data = res.data;
    if (data.success){
      const blogs:BlogDto[] = data.data;
      blogs.forEach((item,index,arry)=>{
        item.index=++index;
        blogList.push(item);
      });
    }
  },reason => {}).catch(err=>{});
};

 onBeforeMount(()=>{
   blog.getBlogSummaryByPagination(1,10).then(res=>{
     const data = res.data;
     if (data.success){
      const blogs:BlogDto[] = data.data;
      blogs.forEach((item,index,arry)=>{
        item.index=++index;
        blogList.push(item);
      });
     }
   },reason => {}).catch(err=>{});
 });
</script>

<style scoped>

</style>