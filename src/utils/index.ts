
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