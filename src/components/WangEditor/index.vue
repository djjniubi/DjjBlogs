<template>
    <div :class="['editor-disabled']">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode">
        </Toolbar>
        <Editor :style="{height,overflowY}" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="handleCreated"></Editor>
    </div>
</template>
<script lang="ts" setup name="WangEditor">
import { onBeforeUnmount,computed, ref, shallowRef, onMounted } from "vue"
import { IToolbarConfig, IEditorConfig } from "@wangeditor/editor";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
import '@wangeditor/editor/dist/css/style.css'
import {upload} from "@/api/upload"
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 实列化编辑器
const handleCreated = (editor:any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
//接收父组件参数
interface RichEditorProps{
    value:string,  //富文本值 (必传)
    toolbarConfig?:Partial<IToolbarConfig> , //工具栏配置
    editorConfig?:Partial<IEditorConfig>,  //编辑器配置
    height?:string,   //富文本高度,默认就是500px
    overflowY?:string, //富文本超出隐藏 ,默认 hidden
    mode?:"default"|"simple"  //富文本样式,默认default
}
//父组件
const props=withDefaults(defineProps<RichEditorProps>(),{
    value:"",
    editorConfig:()=>{
        return {
            placeholder:"请输入内容" ,
            MENU_CONF:{},
        }
    },
    toolbarConfig: () => {
		return {
			excludeKeys: []
		};
	},
    height: "500px",
    overflowY:"hidden",
    mode:"default"
})


type EmitProps = {
	(e: "update:value", val: string): void;
	(e: "check-validate"): void;
};
const emit = defineEmits<EmitProps>();
    const valueHtml = computed({
	get() {
		return props.value;
	},
	set(val: string) {
        // console.log("val",val);
		// 防止富文本内容为空时，校验失败
		// if (editorRef.value.isEmpty()) val = "";
		emit("update:value", val);
	}
});

//图片上传
type InsertFnType = (url: string, alt?: string, href?: string) => void
props.editorConfig.MENU_CONF!["uploadImage"]={
    customInsert(res: any, insertFn: InsertFnType){
        
    },
    async customUpload(file: File, insertFn: InsertFnType) { 
         let fromData=new FormData()
         fromData.append("avatar",file)
        try {
			const {data} = await upload(fromData)
            insertFn(`http://loclhost:3000${data.url}`);
		} catch (error) {
			console.log(error);
		}               // TS 语法
    // async customUpload(file, insertFn) {                   // JS 语法
        // file 即选中的文件
        // 自己实现上传，并得到图片 url alt href
        // 最后插入图片
        // insertFn(url, alt, href)
    }

}



// 编辑框失去焦点时触发
const handleBlur = () => {
	emit("check-validate");
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    // const editor = editorRef.value
    // if (editor == null) return
    // editor.destroy()
    if (!editorRef.value) return;
	editorRef.value.destroy();
})

defineExpose({
	editor: editorRef
});
</script>
<style lang="scss" scoped>
@import "./index.scss"
</style>