<template>
  <div class="home">
    <div class="search-bar">
      <el-form
        class="search-bar_form"
        label-position="right"
        label-width="100px"
        :model="formLabelAlign"
      >
        <el-form-item label="文章标题">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select
            v-model="formLabelAlign.region"
            placeholder="请选择文章类型"
          >  
          <el-option label="" value="" />
          <div v-for="(item,index) in categories.data " :key="index">
            <el-option :label="item.categoriesName" :value="item.categoriesCode"  />
          </div>
          </el-select>
        </el-form-item>
        <el-form-item label="文章状态">
          <el-input v-model="formLabelAlign.postType" />
        </el-form-item>
        <el-form-item>
          <div>
            <el-button type="primary" icon="Search"> 搜索 </el-button>
          <el-button type="" icon="RefreshRight"> 重置 </el-button>
          </div>
          
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-group">
      <el-button type="primary" icon="Plus" @click="dialogVisible = true">
        新增
      </el-button>
    </div>
    <el-table :data="tableData.data" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column label="标题" prop="title" min-width="120" />
      <el-table-column label="类型" prop="postType" min-width="120" >
        <template #default="scope">
            <span>{{  categories.data[scope.row.postType].categoriesName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布者" prop="promulgatorName" min-width="120" />
      <el-table-column label="发布时间" prop="creationTime" min-width="120" />
      <el-table-column label="发布状态" prop="state" min-width="120">
        <template #default="scope">
          <el-row>
            <el-tag
              v-if="scope.row.state !== '0' || 0"
              class="mx-1"
              type="success"
              >已发布</el-tag
            >
            <el-tag v-else class="mx-1" type="danger" >未发布</el-tag>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="320">
        <template #default="scope">
          <el-button icon="Search" @click="clickInfo(scope.row)">详情</el-button>
          <el-button type="warning" icon="Edit">修改</el-button>
          <el-button type="danger" icon="Delete">删除</el-button>
          <el-button v-if="scope.row.state=='0'||0" type="primary" icon="Check">发布</el-button>
          <el-button v-else type="danger" icon="Check">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 新增 -->
  <el-dialog v-model="dialogVisible" title="新增文章" width="80%">
    <div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="文章类型" prop="region">
          <el-select v-model="ruleForm.postType" placeholder="请选择文章类型">
            <el-option label="" value="" />
            <div v-for="(item,index) in categories.data " :key="index">
            <el-option :label="item.categoriesName" :value="item.categoriesCode"  />
          </div>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div style="border: 1px solid black;">
      <WangEditor v-model:value="content" />
    </div>
    <div>
      <el-button class="submit-form" size="large" type="primary" @click="submitForm(ruleFormRef)">确认</el-button>
    </div>
    <template #footer>
      <span class="dialog-footer"> </span>
    </template>
  </el-dialog>
   <div @click="aaa()">点击</div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import {articleAdd, articleList,categoriesList,articleParticulars } from "@/api/article";
import type { FormInstance, FormRules } from "element-plus";
import WangEditor from "@/components/WangEditor/index.vue";
import {GlobalStore} from "@/store"
import {formatDate} from "@/utils"
const content = ref("")
const globalStore=GlobalStore()
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  title: "",
  content:"",
  promulgatorName:"",
  creationTime:"",
  postType:"",
  state:""
});
const rules = reactive<FormRules>({
  title: [
    { required: true, message: "请输入标题", trigger: "blur" },
  ],
  postType: [
    {
      required: true,
      message: "请选择文章类型",
      trigger: "change",
    },
  ],
});


//检索表单
const formLabelAlign = reactive({
  name: "",
  region: "",
  postType: "",
});
//表格接口
interface Article {
  title: String;
  postType: String | Number;
  promulgatorName: String;
  creationTime: String;
  state: String | Number;
}
//表格数据
let tableData:{data:Article[]} =reactive({data:[
  {
    title: "小美小美",
    postType: "0",
    promulgatorName: "小美",
    creationTime: "2023-02-17",
    state: "0",
  },
]}) 
//文章分类
let categories:{data:[any]}=reactive({data:[{}]})
//对话框
const dialogVisible = ref(false);
articleList({}).then((res: any) => {
  tableData.data=res.data
});

//确认
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
   const date =new Date()
    if (valid) {
      console.log("ruleForm",ruleForm);
      ruleForm.content=content.value
      ruleForm.promulgatorName=globalStore.$state.userInfo["username"]
      ruleForm.creationTime=formatDate(date)
      ruleForm.state="0"
      articleAdd(ruleForm)
    } else {
      console.log("error submit!", fields);
    }
  });
};

//获取文章详情
 const  clickInfo=(data:any)=>{
   console.log("获取文章详情",data);
   dialogVisible.value=true
   ruleForm.title=data["title"]
   ruleForm.postType= data["postType"]
   content.value=data["content"]
  //  articleParticulars(data._id).then(res=>{
  //   console.log("articleParticulars",res);
  //  })
   
 }
categoriesList({}).then(res=>{
  console.log("categoriesList",res);
  categories.data=res.data
  
})
const aaa=()=>{
  console.log("富文本内容",content);
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .search-bar {
    display: flex;
    padding: 20px;
    &_form {
      display: flex;
    }
  }
}

.btn-group {
  padding: 0 20px;
}
</style>
