import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 通过Vite的import.meta.glob()方法实现自动化导入路由
const mainRouterModules = import.meta.glob('../layout/*.tsx')
const viewRouterModules = import.meta.glob('../views/**/*.tsx')

// 子路由
const childRoutes = Object.keys(viewRouterModules).map((path)=>{
    const childName: string = path?.match(/views\/(.+)\/index\.tsx/)[1]
    return {
        path: `/${childName}`,
        name: childName,
        component: viewRouterModules[path]
    }
})

// 根路由
const rootRoutes = Object.keys(mainRouterModules).map((path) => {
    const name = path?.match(/\.\.\/layout\/(.*)\.tsx$/)[1];
    const routePath = `/${name}`;
    if (routePath === '/index') {
        return {
            path: '/',
            name,
            redirect: '/home',
            component: mainRouterModules[path],
            children: childRoutes
        };
    }
})


const routes: Array<RouteRecordRaw> = rootRoutes


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
