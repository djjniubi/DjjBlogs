import router from "./index";
import {getStorage,setStorage} from "@/utils/index"
import {ElMessage} from "element-plus"
//设置白名单
const whiteList:string[]=["/login"]

router.beforeEach(async(to,from,next)=>{
   
    
    const token =getStorage("token")
    if(token){
        if(to.path==="/login"){
            next({path:"/home"})
        }
    }else{
        if(whiteList.indexOf(to.path) !== -1){
            next() 
        }else{
            ElMessage({
                message:"登录已过期，请重新登录！",
                type:"error"
            })
    
            next(`/login?redirect=${to.path}`)
        }
        
    }
})

router.afterEach(() => {
   
  })