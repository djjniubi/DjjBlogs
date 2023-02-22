<template>
  <div class="home">
    <div class="search-bar">
      <el-form
        class="search-bar_form"
        label-position="left"
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
            <el-option label="资讯" value="shanghai" />
            <el-option label="后端" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="文章状态">
          <el-input v-model="formLabelAlign.postType" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search"> 搜索 </el-button>
          <el-button type="" icon="RefreshRight"> 重置 </el-button>
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
      <el-table-column label="类型" prop="postType" min-width="120" />
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
          <el-button icon="Search">详情</el-button>
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
          <el-select v-model="ruleForm.region" placeholder="请选择文章类型">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div style="border: 1px solid black;">
      <WangEditor v-model:value="content" />
    </div>
    <template #footer>
      <span class="dialog-footer"> </span>
    </template>
  </el-dialog>
   <div @click="aaa()">点击</div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { articleList } from "@/api/article";
import type { FormInstance, FormRules } from "element-plus";
import WangEditor from "@/components/WangEditor/index.vue";
const content = ref("")

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  title: "",
  region: "",
});
const rules = reactive<FormRules>({
  title: [
    { required: true, message: "请输入标题", trigger: "blur" },
  ],
  region: [
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
//对话框
const dialogVisible = ref(false);
// articleList({}).then((res: any) => {
//   tableData.data=res.data
// });

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
