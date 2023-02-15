<template>
  <div class="login-body" >
    
  </div>
  <div class="form-box">
    <div class="login">
      <h3 v-if="lognType">登录</h3>
      <h3 v-else>注册</h3>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm login_form"
        :size="formSize"
        status-icon
      >
        <el-form-item label-width="80px" label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item  label-width="80px" label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" />
        </el-form-item>
        <div v-if="lognType" style="display:flex ;align-items: center;">
          <el-form-item class="code-item" label-width="80px" label="验证码" prop="code">
            <el-input v-model="ruleForm.code" />
        </el-form-item>
          <div  v-html="svg" @click="codeSvg"></div>
          <!-- <img :src="svg" alt=""> -->
        </div>
        <!-- <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交表单
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置表单</el-button>
        </el-form-item> -->
      </el-form>
      <el-button v-if="lognType" class="submit-form" size="large" type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
      <el-button v-else class="submit-form" size="large" type="primary" @click="submitForm(ruleFormRef)">
        注册
      </el-button>
      <div class="sign-up">
          <p class="p1">还未有账号？</p>
          <p class="p2" @click="registration">{{lognType?'去注册':'去登录'}}</p>
      </div>
    </div>
  </div>
 
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { codeCaptcha,userLogin } from "@/api/login";
import {setStorage} from "@/utils/index"
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  username: "",
  password: "",
  code: "",
});
const lognType=ref(true)
const svg=ref()
const code = ref();
const validatePass =(rule:any,value:any,callback:any):any=>{
    if(value!==code.value){
      callback("验证码不正确")
    }

}
const rules = reactive<FormRules>({
  username: [
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
    {validator:validatePass}
  ],
});
console.log("cookis",document.cookie.split("="));

const submitForm = async (formEl: FormInstance | undefined) => {

  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    console.log("valid");
    
    if (valid) {
      if(ruleForm["code"]!==code.value){
          
      }else{
        userLogin(ruleForm).then((res:any)=>{
          setStorage("token",res["token"])
        })
      }
       
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
//去注册
const registration=()=>{
  lognType.value=!lognType.value
}
const codeSvg = () => {
  codeCaptcha().then((res:any) => {
    code.value = res["text"];
    svg.value=res["data"]
  });
};
codeSvg();
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>