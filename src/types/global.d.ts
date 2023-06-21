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
    }
}