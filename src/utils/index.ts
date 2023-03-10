
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
