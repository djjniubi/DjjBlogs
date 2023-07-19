<template>
  <div class="login-body" >
    
  </div>
  <!-- 登录 -->
  <div class="form-box row-around-center">
    <div class="login-left">
      <img  class="login-left-img" src="../../assets/login.svg" alt="">
    </div>
    <div class="login front">
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
        <el-form-item label-width="80px" label="用户名" prop="userName"  >
          <el-input v-model="ruleForm.userName" placeholder="admin"  />
        </el-form-item>
        <el-form-item  label-width="80px" label="密码" prop="password" >
          <el-input type="password" v-model="ruleForm.password" placeholder="123456"  />
        </el-form-item>
      </el-form>
      <div class="row-start-center" style="width:100%;">
        <el-button class="submit-form" icon="CircleClose" size="large" :round="true"  @click="resetForm(ruleFormRef)">
       重置
      </el-button>
      <el-button class="submit-form" icon="UserFilled" size="large" :round="true" type="primary" @click="submitForm(ruleFormRef)">
        登录
      </el-button>
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
import {useRouter} from "vue-router"
import {ElMessage} from "element-plus";
import {initDynamicRouter} from "@/route/modules/dynamicRoute";
const formSize = ref("default");
const globalStore=GlobalStore()

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  userName: "",
  password: "",
});
const lognType=ref(true)
const svg=ref()
const code = ref();
const router=useRouter()
const rulesLogin = reactive<FormRules>({
  userName: [
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
  await formEl.validate(async(valid, fields) => {
   
    if (valid) {
         const {data}=await userLogin(ruleForm);
                      await initDynamicRouter()
         const {avatar,creationTime,email,id,phone,updateTime,userName}=data;
         globalStore.setToken(data.token);
         globalStore.setUserInfo({avatar,creationTime,email,id,phone,updateTime,userName})
         ElMessage.success({
          message:"欢迎登录",
          type:"success"
         })
         setTimeout(()=>{
          router.push("/home/index")
         },800)
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>