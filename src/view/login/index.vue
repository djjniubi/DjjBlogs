<template>
  <div class="login-body" >
    
  </div>
  <!-- 登录 -->
  <div class="form-box">
    <div class="login front" :class="[lognType?'':'turn-out-front']">
      <h3 >登录</h3>
  
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rulesLogin"
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
        <div style="display:flex ;align-items: center;">
          <el-form-item class="code-item" label-width="80px" label="验证码" prop="code">
            <el-input v-model="ruleForm.code" />
        </el-form-item>
          <div  v-html="svg" @click="codeSvg"></div>
        </div>
      </el-form>
      <el-button class="submit-form" size="large" type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
      <div class="sign-up">
          <p class="p1">还未有账号？</p>
          <p class="p2" @click="registration">去注册</p>
      </div>
    </div>
    <div class="login back" :class="[lognType?'turn-out-front':'turn-out-back']">
      <!-- 注册 -->
      <h3 >注册</h3>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rulesSignUp"
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
        </el-form>
        <el-button  class="submit-form" size="large" type="primary" @click="submitSignUp(ruleFormRef)">
          注册
        </el-button>
        <div class="sign-up">
          <p class="p1">已有账号？</p>
          <p class="p2" @click="registration">去登录</p>
      </div>
    </div>
  </div>
  
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { codeCaptcha,userLogin,register } from "@/api/login";
import {setStorage} from "@/utils/index"
import { GlobalStore}from "@/store"
import router from "@/route";
import {ElMessage} from "element-plus"
const formSize = ref("default");
const globalStore=GlobalStore()

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
  console.log("code",code);
  
    if(value!==code.value){
      callback("验证码不正确")
    }else{
      callback()
    }

}
const rulesLogin = reactive<FormRules>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { message: "Length should be 3 to 5", trigger: "blur" },
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
    // {validator:validatePass}
  ],
});
const rulesSignUp=reactive<FormRules>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {  message: "Length should be 3 to 5", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
   
    if (valid) {
      console.log("ruleForm",ruleForm);
      if(ruleForm["code"]!==code.value){
        ElMessage({
            message:"验证码验证失败",
                type:"error"
          })
          ruleForm.code=""
      }else{
        userLogin(ruleForm).then((res:any)=>{
          if(res["code"]===200){
            ElMessage({
            message:"登入成功",
                type:"success"
          })
          globalStore.setToken(res["token"])
          globalStore.setUserInfo(res["userinfo"])
          router.push("/")
          }
         
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
//注册
const submitSignUp= async (formEl: FormInstance | undefined)=>{
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
   
    if (valid) {
      register(ruleForm).then((res)=>{
          console.log("register",res);
          ElMessage({
            message:"注册成功",
                type:"success"
          })
      })
       
    } else {
      console.log("error submit!", fields);
    }
  });
}
const codeSvg = () => {
  codeCaptcha().then((res:any) => {
    code.value = res["text"];
    svg.value=res["data"];
    // console.log("res",res);
    
  });
};
codeSvg();
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>