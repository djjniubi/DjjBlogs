/** themeConfigType */
export interface ThemeConfigType{
    layouts:string,
    isCollapse:boolean,
    themeColor:string,
    isDarkness:boolean,
    isGray:boolean,
    isColorWeakness:boolean
}

/*counterState*/
export interface counterState{
    token:String,
    userInfo:any,
    themeConfig:ThemeConfigType
}