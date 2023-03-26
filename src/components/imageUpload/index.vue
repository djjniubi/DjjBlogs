<template>
    <div>这里是图片上传</div>
    <div>
        <el-upload class="upload-demo" name="avatar" action="/api/upload" :multiple="multiple" :on-preview="handlePreview"
            :on-remove="handleRemove" :show-file-list="false" :before-remove="beforeRemove" :on-change="handleChange"
            :limit="limit" :drag="drag" :on-exceed="handleExceed" :before-upload="beforeUpload">
            <!-- 上传按钮 -->
            <div v-if="drag">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div>请把图片拖到此处</div>
            </div>
            <el-button v-if="!drag" type="primary">请上传文件</el-button>

            <!-- 上传提示 -->
            <template #tip>
                <div class="el-upload__tip tip" style="display: flex;">
                    请上传
                    <div>大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b></div>
                    <div> 格式为 <b style="color: #f56c6c">{{ fileType?.join(",") }}</b> </div>
                </div>
            </template>
        </el-upload>
        <!-- 文件列表 -->
        <transition-group tag="ul" name="slide">
            <li v-for="(item, index) in fileList" :key="item.name" style="list-style: none;">
                <el-link :icon="Tickets" href="#" target="_blank" :underline="false">{{ item.name }}</el-link>
                <div style="display:inline;margin-left: 10px;">
                    <el-link :underline="false" type="danger" @click="handleDelete(index)">删除</el-link>
                </div>
            </li>
        </transition-group>
    </div>
    
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus';
import type { UploadProps, UploadUserFile } from 'element-plus';
import { Tickets, View as IconView } from '@element-plus/icons-vue'
const fileList = ref<UploadUserFile[]>([]);
type FileTypes = "doc" | "xls" | "ppt" | "txt" | "pdf" | "docx" | "xlsx";
//
interface UploadFileProps {
    multiple?: boolean, //是否支持多文件上传
    drag?: boolean,     //是否启用拖拽上传
    //文件上传数量
    limit?: number,
    //文件大小
    fileSize?: number,
    //文件类型
    fileType?: FileTypes[],
    //是否显示提示
    isShowTip?: boolean

}
//接收父组件的参数
const props = withDefaults(defineProps<UploadFileProps>(), {
    //是否支持多文件上传
    multiple: true,
    //是否启用拖拽上传
    drag: false,
    //文件上传数量
    limit: 5,
    //文件大小
    fileSize: 5,
    //文件类型
    fileType: (): any => ["doc", "xls", "ppt", "txt", "pdf"],
    //是否显示提示
    isShowTip: true
})
/**
 * @description 文件上传之前判断
 */
const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    let fileExtension = "";
    const rawFileSize = file.size / 1024 / 1024 < props.fileSize;
    const fileType = props.fileType
    if (file.name.lastIndexOf(".") > -1) fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1)
    if (!fileType.includes(fileExtension as FileTypes)) ElMessage({
        message: `文件格式不正确,请上传 ${props.fileType.join(",")}`,
        type: "warning"
    })
    if (!rawFileSize) {
        ElMessage({
            message: `上传文件大小不能超过 ${props.fileSize}M!`,
            type: "warning"
        })
    }

    return fileType.includes(fileExtension as FileTypes) && rawFileSize
}
//点击文件列表中已上传的文件时的钩子
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {

};
const handleChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
    console.log("handleChange", uploadFile)
    console.log("uploadFiles", uploadFiles);

};
//文件列表移除文件时的钩子
const handleRemove = () => { };
//删除文件之前的钩子，参数为上传的文件和文件列表
const beforeRemove = () => { };
//当超出限制时，执行的钩子函数
const handleExceed = () => { };
/**
 * @description 删除文件
 */
const handleDelete = (index: any) => {

}
</script>
<style lang="scss" scoped>
.tip {
    display: flex;
}
</style>