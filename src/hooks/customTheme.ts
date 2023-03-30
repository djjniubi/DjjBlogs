import {computed} from "vue";
import {GlobalStore} from "@/store";

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
    /** 控制切换灰色模式 */
    const switchGray=(type:string)=>{
         const body=document.documentElement as HTMLElement;
         const switcType:SwitchGray={
            "isGray":()=>{themeConfig.value.isGray?body.style.filter=`grayscale(100%)`:body.style.filter=`grayscale(0%)`},
            "isColorWeakness":()=>{themeConfig.value.isColorWeakness?body.style.filter=`invert(100%)`:body.style.filter=`invert(0%)`}
         }
         switcType[type]()
    }
    return{
        switchTo,
        switchGray,

    }
}