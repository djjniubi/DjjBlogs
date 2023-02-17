<template>
  <div class="home">
    <div class="search-bar">
      <el-form
        class="search-bar_form"
        label-position="label-width"
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
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search"> 搜索 </el-button>
          <el-button type="" icon="RefreshRight"> 重置 </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-group">
      <el-button type="primary" icon="Plus"> 新增 </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection"  width="55" />
      <el-table-column label="标题" prop="title" min-width="120" />
      <el-table-column label="类型" prop="type" min-width="120" />
      <el-table-column label="发布者" prop="promulgator" min-width="120" />
      <el-table-column label="发布时间" prop="releaseTime" min-width="120" />
      <el-table-column label="发布状态" prop="state" min-width="120" >
		<template #default="scope">
			<el-row>
				<el-tag v-if="scope.row.state!=='0'||0" class="mx-1" size="success">已发布</el-tag>
				<el-tag v-else class="mx-1" size="danger">未发布</el-tag>
			  </el-row>	
		</template>
	  </el-table-column>
      <el-table-column label="操作" min-width="320">
        <template #default="scope">
          <el-button icon="Search">详情</el-button>
          <el-button type="warning" icon="Edit">修改</el-button>
          <el-button type="danger" icon="Delete">删除</el-button>
          <el-button type="primary" icon="Check">发布</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
//检索表单
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});
//表格接口
interface Article {
  title: String;
  type: String | Number;
  promulgator: String;
  releaseTime: String;
  state: String | Number;
}
//表格数据
const tableData: Article[] = [
  {
    title: "小美小美",
    type: "0",
    promulgator: "小美",
    releaseTime: "2023-02-17",
    state: "0",
  },
];
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
