<template>
    <el-form :model="blogData" label-width="120px">
      <el-form-item label="博客标题">
        <el-input v-model="blogData.title" placeholder="Title"></el-input>
      </el-form-item>

      <el-form-item label="博客作者">
        <el-input placeholder="Author" v-model="blogData.author"></el-input>
      </el-form-item>

      <el-form-item label="博客贡献">
        <el-input placeholder="Contribution" v-model="blogData.contribution"></el-input>
      </el-form-item>

      <el-form-item label="博客摘要">
        <el-input v-model="blogData.summary" type="textarea" rows="10" placeholder="Summary"></el-input>
      </el-form-item>

      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker
              v-model="blogData.publishDate"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          />
        </el-col>
        <el-col :span="2" style="text-align: center">
          <span>--</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
              v-model="blogData.publishTime"
              placeholder="Pick a time"
              style="width: 100%"
          />
        </el-col>
      </el-form-item>

      <el-form-item label="博客分类">
        <el-select v-model="blogData.category" placeholder="请选择博客分类">
          <el-option v-for="category in categories" :label="category.categoryName" :value="category.categoryName"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="博客标签">
        <el-tag
            v-for="tag in blogData.tags"
            :key="tag"
            style="margin-right: .5rem"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input
            v-if="tagInputVisible"
            ref="TagInputRef"
            v-model="tagInputValue"
            style="width: 81px;"
            class="ml-1 w-20"
            size="small"
            @keyup.enter="handleTagInputConfirm"
            @blur="handleTagInputConfirm"
        >
        </el-input>
        <el-button v-else size="small" @click="showTagInput">
          + New Tag
        </el-button>
      </el-form-item>

      <el-form-item label="博客上传">
        <el-upload
            ref="upload"
            action="none"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
            :on-success="showUploadResult"
            :file-list="blogData.blogFile"
        >
          <template #trigger>
            <el-button type="primary" size="small">Select File</el-button>
          </template>
          <template #tip>
            <div class="el-upload__tip" style="color: var(--el-text-color-placeholder)">只能按约定上传一个zip文件</div>
          </template>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">发布<el-icon><Promotion /></el-icon></el-button>
      </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import {nextTick, onBeforeMount, onMounted, reactive, ref} from "vue";
import {ElInput, genFileId, UploadFile, UploadFiles, UploadInstance, UploadProps, UploadRawFile} from "element-plus";
import {ElNotification} from "element-plus/es";
import blog from "../../api/blog";
import {BlogDto} from "../../model/blog";
import Blog from "../../api/blog";
import {categoryDataType, categoryDto} from "../../model/category";

/*表单数据*/
const blogData:BlogDto = reactive<BlogDto>(new BlogDto());
const categories:categoryDataType[] = reactive([]);

const tagInputVisible = ref(false);
const TagInputRef = ref<InstanceType<typeof ElInput>>();
const tagInputValue = ref('');
let handleClose = (tag: string) => {
  blogData.tags.splice(blogData.tags.indexOf(tag), 1);
}

let handleTagInputConfirm = () => {
  if (tagInputValue.value) {
    blogData.tags.push(tagInputValue.value)
  }
  tagInputVisible.value = false;
  tagInputValue.value = '';
}

let showTagInput = () => {
  tagInputVisible.value = true;
  nextTick(() => {
    TagInputRef.value!.input!.focus()
  })
}

/*文件上传*/
const upload = ref<UploadInstance>();
let handleExceed:UploadProps['onExceed'] = (files)=>{
  /*!.是断言语法糖，意为upload.value一定有clearFiles()方法*/
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
}
const showUploadResult: UploadProps['onSuccess'] = (resp: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if(resp===200){
    ElNotification.success({message: "博客发布成功！"});
  }else{
    ElNotification.error({message:"博客上传失败，请重新上传博客文件！"})
  }
};

/*提交表单*/

const onSubmit = () => {
  let allTagsStr = "";
  let formFiles = [];
  for (let i = 0; i < blogData.tags.length; i++) {
    allTagsStr+=blogData.tags[i] + ",";
  }

  blogData.tags = allTagsStr;
  //当json对象要和二进制数据(文件)一起提交至后端时，必须使用FormData对象，否则后端进行模型绑定时将失败，即使手动设置了Conten-Type也会失败
  let formData = new FormData();
  formData.append('title', blogData.title);
  formData.append('author', blogData.author);
  formData.append('contribution', blogData.contribution);
  formData.append('summary', blogData.summary);
  //日期和时间在进行表单提交时，必须格式化为字符串，toISOString()方法返回YYYY-MM-DDTHH:mm:ss.sssZ格式字符串，且会将时区设定为UTC时区
  formData.append('publishDate', blogData.publishDate.toISOString());
  formData.append('publishTime', blogData.publishTime.toISOString());
  formData.append('category', blogData.category);
  formData.append('tags', blogData.tags);
  formData.append('blogFile', blogData.blogFile[0]?.raw);
  blog.addBlog(formData).then(res=>{
    const data = res.data;
    if (data.success){
      ElNotification({
        title:"Success",
        message:data.message,
        type:"success"
      });
    }else {
      ElNotification({
        title:"Fail",
        message:data.message,
        type:"error"
      });
    }
  },reason => {
    ElNotification({
      title:"Fail",
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

onBeforeMount(()=>{
  //挂载前获取现有分类信息
  blog.getAllCategory().then(res=>{
    const data = res.data;
    if (data.success) {
      const response:categoryDataType[] = data.data;
      response.forEach(item => categories.push(item));
    } else {
      ElNotification({
        title: "Error",
        message: data.message,
        type: "error"
      });
    }
  },reason => {
    ElNotification({
      title:"Error",
      message:reason.message,
      type:"error"
    })
  }).catch(err=>{ElNotification({
    title:"Error",
    message:err.message,
    type:"error"
  })});
})

</script>

<style scoped>
:deep(.el-upload__tip){
  margin-top: 0;
}
</style>