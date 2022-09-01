<template>
  <el-table :data="categoryData" style="width: 100%;">
    <el-table-column prop="index" label="序号"></el-table-column>
    <el-table-column prop="categoryName" label="分类名"></el-table-column>
    <el-table-column prop="number" label="文章数量"></el-table-column>
    <el-table-column label="管理">
      <template #default="scope">
        <el-button size="small" @click="showEditCategoryDialog(scope.row)">编辑</el-button>
        <el-popconfirm
            title="该操作会删除此分类下所有文章，确定删除吗？"
            confirm-button-type="danger"
            @confirm="deleteCategory(scope.row)"
        >
          <template #reference>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-button size="small" type="primary" @click="showCreateDialog">创建分类</el-button>
  <el-dialog
      v-model="dialogVisible"
      :title=dialogTitle
      width="30%"
  >
    <el-form>
      <el-form-item label="分类名">
        <el-input v-model="categoryName"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="createOrEditCategory(categoryName)" type="primary" size="small">确定</el-button>
      <el-button @click="cancleHandle" size="small">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {Ref, ref, reactive, onMounted, nextTick, onBeforeMount} from "vue";
import blog from "../../api/blog";
import {ElNotification} from "element-plus/es";
import {categoryDataType, categoryDto} from "../../model/category";
const dialogVisible = ref(false);
const categoryName = ref("");
let categoryData:categoryDataType[] = reactive([]);
const index = ref(1);
const dialogTitle = ref("创建分类");
const editCategoryUUId = ref("");

//创建或编辑分类
const createOrEditCategory = (categoryName:string)=>{
  if (dialogTitle.value==="创建分类"){
    if (categoryName!==''&&categoryName!=null){
      blog.addCategory(categoryName).then(resp=>{
        const data = resp.data;
        if (data.success){
          ElNotification({
            title:"Success",
            message:data.message,
            type:"success"
          });
          dialogVisible.value=false;
          //将新增的数据插入到表格中
          data.response.index = index.value++; //先处理一下索引
          categoryData.push(data.response);
        }else{
          ElNotification({
            title:"Error",
            message:data.message,
            type:"error"
          });
          dialogVisible.value=false;
        }
      },reason => {
        ElNotification({
          title:"Error",
          message:reason.message,
          type:"error"
        });
      }).catch(err=>{
        ElNotification({
          title:"Error",
          message:err.message,
          type:"error"
        });
      });
    }else{
      dialogVisible.value=false;
    }
  }else if(dialogTitle.value==="编辑分类"){
    blog.updateCategory(categoryName,editCategoryUUId.value).then(res=>{
      const data = res.data;
      if (data.success){
        ElNotification({
          title:"Success",
          message:data.message,
          type:"success"
        });
        dialogVisible.value = false;
        categoryData.forEach((item,index,arr)=>{
          if (item.uuid===editCategoryUUId.value){
            item.categoryName=categoryName;
          }
        });
      }else{
        ElNotification({
          title:"Error",
          message:data.message,
          type:"error"
        });
      }
    },reason => {
      ElNotification({
        title:"Error",
        message:reason.message,
        type:"error"
      });
      dialogVisible.value=false;
    }).catch(err=>{
      ElNotification({
        title:"Error",
        message:err.message,
        type:"error"
      });
      dialogVisible.value = false;
    });
  }

}

const cancleHandle = ()=>{
  dialogVisible.value = false;
  nextTick(()=>{
    dialogTitle.value = "创建分类";
  })
};

//查询所有分类
const getAllCategory = ()=>{
  blog.getAllCategory().then(res=>{
    const data:categoryDataType[] = res.data.data;
   data.forEach(item=>{item.index=index.value++;categoryData.push(item)});
  },reason => {
    ElNotification({
      title:"Error",
      message:reason.message,
      type:"error"
    });
  }).catch(err=>{
    ElNotification({
      title:"Error",
      message:"服务器内部错误",
      type:"error"
    });
  });
};

//删除一条分类
const deleteCategory = (row:any) => {
  const category: categoryDto = {categoryName: row.categoryName, number: row.number};
  blog.deleteCategory(category).then(res=>{
    const data = res.data;
    if (data.success){
      ElNotification({
        title:"Success",
        message:data.message,
        type:"success"
      });
      //删除成功，刷新列表
      categoryData.length=0;
      index.value=1;
      getAllCategory();
    }
  },reason => {
    ElNotification({
      title:"Error",
      message:reason.message,
      type:"error"
    });
  }).catch(err=>{
    ElNotification({
      title:"Error",
      message:err.message,
      type:"error"
    });
  });
};

//显示编辑分类的dialog
const showEditCategoryDialog = (row:any)=>{
  editCategoryUUId.value = row.uuid;
  categoryName.value = row.categoryName;
  dialogTitle.value = "编辑分类";
  dialogVisible.value = true;
}

//显示创建分类的dialog
const showCreateDialog=()=>{
  dialogTitle.value="创建分类";
  categoryName.value="";
  dialogVisible.value =true;
}
onBeforeMount(()=>{
  getAllCategory();
});

</script>

<style scoped>
.el-table {
  margin-bottom: 1rem;
}
</style>