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
        <el-form-item label-width="80px" label="用户名" prop="username" >
          <el-input v-model="ruleForm.username"  />
        </el-form-item>
        <el-form-item  label-width="80px" label="密码" prop="password" >
          <el-input type="password" v-model="ruleForm.password"  />
        </el-form-item>
        <!-- <div style="display:flex ;align-items: center;">
          <el-form-item class="code-item" label-width="80px" label="验证码" prop="code">
            <el-input v-model="ruleForm.code" />
        </el-form-item>
          <div  v-html="svg" @click="codeSvg"></div>
        </div> -->
      </el-form>
      <el-button class="submit-form" size="large" type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>

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
import {ElMessage} from "element-plus";
import {initDynamicRouter} from "@/route/modules/dynamicRoute"
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
       if(ruleForm.username!="admin") ElMessage({
            message:"用户名错误",
                type:"error"
          })
          if(ruleForm.password!="123456") ElMessage({
            message:"密码错误",
                type:"error"
          })
          if(ruleForm.username==="admin"&&ruleForm.password==="123456"){
            ElMessage({
            message:"登入成功",
                type:"success"
          })
         
          globalStore.setToken("asd123456")
          initDynamicRouter()
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


const codeSvg = () => {
  codeCaptcha().then((res:any) => {
    code.value = res["text"];
    svg.value=res["data"];
    // console.log("res",res);
    
  });
};
// codeSvg();
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>