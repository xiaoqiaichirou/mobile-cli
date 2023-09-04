import type { RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

interface RouteMeta {
    keepAlive?: boolean
}
export interface AppRouteRecordRaw extends RouteLocationNormalizedLoaded {
    name: string
    meta: RouteMeta
    component?: Component | string;
    components?: Component  //一个页面或者视图多个路由会使用
    children?: AppRouteRecordRaw[]
    props?: any
    fullPath?: string
}

export interface MenuTag {
    // 类型
    type?: 'primary' | 'error' | 'warn' | 'success'
    // 内容
    content?: string
    // 为true则显示小圆点
    dot?: boolean
}


export interface Menu {
    //  菜单名
    name: string
    // 菜单图标,如果没有，则会尝试使用route.meta.icon
    icon?: string
    // 菜单路径
    path: string

    // path contains param, auto assignment.
    paramPath?: string
    // 是否禁用
    disabled?: boolean
    // 子菜单
    children?: Menu[]
    // 菜单排序
    orderNo?: number

    roles?: string[]

    meta?: Partial<RouteMeta>
    // 菜单标签设置
    tag?: MenuTag
    // 是否隐藏菜单
    hideMenu?: boolean
}


export interface MenuModule {
    orderNo?: number
    menu: Menu
}

export type AppRouteModule = AppRouteRecordRaw
