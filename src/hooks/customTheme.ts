import {computed} from "vue";
import {GlobalStore} from "@/store";
export const customTheme=()=> {
    const globalStore=GlobalStore();
    const themeConfig=computed(()=>globalStore.themeConfig);
    /** 控制切换暗黑模式 */
    const switchTo=()=>{
         const body =document.documentElement as HTMLElement
         themeConfig.value.isDarkness?body.setAttribute("class","dark"):body.setAttribute("class","");
    }

    return{
        switchTo
    }
}