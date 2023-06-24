/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2023-06-23 14:20:18
 * @FilePath: \DjjBlogs\src\types\global.d.ts
 * @LastEditors: djj
 * @LastEditTime: 2023-06-24 03:06:22
 */
declare namespace Menu{
    interface MenuOptions{
        path: string;
        name: string;
        meta: MetaProps;
        children?: MenuOptions[];
    }
    interface MetaProps{
        icon: string;
        title: string;
        menuOrder:number;
        isHide: boolean;
        isAffix: boolean;
        isFull:boolean
    }
}