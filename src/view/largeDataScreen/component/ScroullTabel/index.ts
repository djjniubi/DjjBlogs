
export interface ParameterConfiguration{
     //标题数据;格式:['a','b','c'],
     headerData:[string]|[],
     //标题的样式:[{},{},{}]
     headerStyle:[object]|[],
     //标题的背景色
     headerBg:string,
     //标题的高度
     headerHeight:number,
     //标题字体字号
     headerFontSize:number,
     //标题是字体是否加粗
     headerFontWeight:string|number,
     //是否展示标题序号
     headerIndex:boolean,
     //序列号标题内容
     headerIndexConter:string,
     //序列号标题样式
     headerIndexStyle:object,
     //序列号标题内容
     headerIndexData:[string]|[],
     //序号列内容的样式
     rowIndexStyle:object,
     //内容数据 二维数组,
     data:[[string]]|[],
     //展示多少条数据
     rowNum:number,
     //移动的位置
     moveNum:number,
     //居中的方式
     aligns:[string]|[],
     //动画间隔
     duration:number,
     //是否显示标题
     isHideHeader:true,
     //序列号tag背景颜色
     tagBGC:string,
     //列表样式
     rowStyle:[string]|[]
}


/**对象合并 */

export const assign=(objeData:object,objeDataTwo:object):ParameterConfiguration=>{
     return Object.assign({},objeData,objeDataTwo) as ParameterConfiguration
}

/**数据拷贝 */

export  const cloneDeep=(data:Array<object|[]>|object)=>{
  if(typeof data==="string" || typeof data === "number")return data;
  return JSON.parse(JSON.stringify(data))
}