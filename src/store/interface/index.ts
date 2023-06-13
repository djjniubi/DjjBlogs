/*
 * @Description: 
 * @Author: 邓建军
 * @Date: 2023-03-27 08:10:53
 * @LastEditTime: 2023-06-13 11:32:10
 */
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

/**tabsMenuList */
export interface TabsState{
    tabsMenuList:TabsMenuProps[]
}
/*TabsMenuProps */
export interface TabsMenuProps{
    title:string,
    icon:string,
    path: string;
    name: string;
    menuOrder:number;
    closable:boolean
}