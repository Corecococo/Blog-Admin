<template>
  <el-form :model="blogData" label-width="120px">
    <el-form-item label="博客标题">
      <el-input v-model="blogData.title" placeholder="Title"></el-input>
    </el-form-item>

    <el-form-item label="博客作者">
      <el-input placeholder="Author" v-model="blogData.author"></el-input>
    </el-form-item>

    <el-form-item label="博客摘要">
      <el-input v-model="blogData.summary" type="textarea" rows="10" placeholder="Summary"></el-input>
    </el-form-item>

    <el-form-item label="发布时间">
      <el-col :span="11">
        <el-date-picker
            v-model="blogData.date"
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
            v-model="blogData.time"
            placeholder="Pick a time"
            style="width: 100%"
        />
      </el-col>
    </el-form-item>

    <el-form-item label="博客分类">
      <el-select v-model="blogData.category" placeholder="请选择博客分类">
        <el-option label="前端" value="前端"/>
        <el-option label="后端" value="后端"/>
        <el-option label="计算机" value="计算机"/>
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
         action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
         :limit="1"
         :on-exceed="handleExceed"
         :auto-upload="false"
         :on-success="showUploadResult"
     >
       <template #trigger>
         <el-button type="primary" size="small">Select File</el-button>
       </template>
       <template #tip>
         <div class="el-upload__tip" style="color: var(--el-text-color-placeholder)">只能上传一个md文件，新选择的文件会替换旧文件</div>
       </template>
     </el-upload>
   </el-form-item>

    <el-form-item>
      <el-button type="primary" size="small" @click="onSubmit">发布<el-icon><Promotion /></el-icon></el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {nextTick, onMounted, reactive, ref} from "vue";
import {ElInput, genFileId, UploadFile, UploadFiles, UploadInstance, UploadProps, UploadRawFile} from "element-plus";
import {ElNotification} from "element-plus/es";

/*表单数据*/
let blogData = reactive({
  title: '',
  summary: '',
  author: '',
  isTop: false,
  tags: [],
  date: '',
  time: '',
  category: ''
});

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
  upload.value!.submit();
  console.log(blogData)
};
</script>

<style scoped>
:deep(.el-upload__tip){
  margin-top: 0;
}
</style>