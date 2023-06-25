/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-25 13:39:12
 */

export function getStorage(key:any){
    const value =window.localStorage.getItem(key)
    try {
        const data:any= window.localStorage.getItem(key)
        return JSON.parse(data)
    } catch (error) {
        return value
    }
}

export function setStorage(key:string,value:any){
    window.localStorage.setItem(key,JSON.stringify(value))
}


export function removeStorage(key:any){
   window.localStorage.removeItem(key)
}
/**
 * 
 * @descriptio 日期格式化 
 * @param {Date} cellValue  日期时间格式
 * @param {string} format  需要返回日期或时间的格式
 * @returns 
 */
export const formatDate=(cellValue:any,format="")=>{
    if (cellValue == null || cellValue == "") return "";
    const date=new Date (cellValue);
    const year =date.getFullYear();
    const month =date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() 
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() 
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() 
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    const formats:any={
        "yyyy":`${year}`,
        "mm": `${month}`,
        "dd":`${day}`,
        "hh":`${hours}`,
        "MM":`${minutes}`,
        "ss":`${seconds}`,
        "yyyy-mm-dd":`${year}-${month}-${day}`,
        "hh:MM:ss":`${hours}:${minutes}:${seconds}`,
        "yyyy-mm-dd hh:MM:ss":`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
    return format?formats[format]:`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * @descriptio 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 */

export const getFlatMapList=(menuList:Menu.MenuOptions[]):Menu.MenuOptions[]=>{
    let list:Menu.MenuOptions[] =JSON.parse(JSON.stringify(menuList));
    return list.flatMap((item)=>[item,...(item.children?[]:[])])
}

