<template>
  <div class="login-body" >
    
  </div>
  <div class="form-box">
    <div class="login">
      <h3>登录</h3>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm login_form"
        :size="formSize"
        status-icon
      >
        <el-form-item label-width="80px" label="用户名" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label-width="80px" label="密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <div style="display:flex ;align-items: center;">
          <el-form-item class="code-item" label-width="80px" label="验证码" prop="code">
            <el-input v-model="ruleForm.code" />
        </el-form-item>
          <div v-html="code" @click="codeSvg"></div>
        </div>
        <!-- <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交表单
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置表单</el-button>
        </el-form-item> -->
      </el-form>
      <el-button class="submit-form" size="large" type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
      <div class="sign-up">
          <p class="p1">还未有账号？</p>
          <p class="p2">去注册</p>
      </div>
    </div>
  </div>
 
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { codeCaptcha } from "@/api/login";
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  password: "",
  code: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const code = ref();
const codeSvg = () => {
  codeCaptcha().then((res) => {
    code.value = res;
  });
};
codeSvg();
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>