import {computed,onBeforeMount} from "vue";
import {GlobalStore} from "@/store";
import {THEME_COLORS} from "@/config";

type SwitchGray={
   [key:string]:Function
}
export const customTheme=()=> {
    const globalStore=GlobalStore();
    const themeConfig=computed(()=>globalStore.themeConfig);
    /** 控制切换暗黑模式 */
    const switchTo=()=>{
         const body =document.documentElement as HTMLElement
         themeConfig.value.isDarkness?body.setAttribute("class","dark"):body.setAttribute("class","");
    }
    /** 修改主题颜色 */
       const setThemeColors=(value:string)=>{
        console.log("value",value);
        
            if(!value){
               globalStore.setThemeConfig({...themeConfig.value,themeColor:THEME_COLORS})
            }
            globalStore.setThemeConfig({...themeConfig.value,themeColor:value});
            document.documentElement.style.setProperty("--el-color-primary",themeConfig.value.themeColor)
       }
    /** 控制切换灰色模式 */
    const switchGray=(value:boolean,type:string)=>{
        const body=document.documentElement as HTMLElement;
        if(!value) return body.setAttribute("style","");
         const switcType:SwitchGray={
            "isGray":()=>{body.style.filter=`grayscale(100%)`},
            "isColorWeakness":()=>{body.style.filter=`invert(100%)`}
         }
         switcType[type]();
         let propName=type=="isGray"?"isColorWeakness":"isGray";
         globalStore.setThemeConfig({...themeConfig.value,[propName]:false})
         
    }
    return{
        switchTo,
        switchGray,
        setThemeColors
    }
}