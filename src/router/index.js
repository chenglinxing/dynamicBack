import { lazy, Suspense } from "react"

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';





function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('首页', '/home', <PieChartOutlined />),
    getItem('动态管理', '/dynamic', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
];

//添加路由的懒加载
const Home = lazy(() => import("../pages/home"))
const DynamicManage = lazy(() => import("../pages/dynamicManage"))

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children) => {
    return <Suspense fallback={<h1>Loading...</h1>}>
        {children}
    </Suspense>
}
const menus = [
    {
        path: "/",
        component: Home
    }, {
        path: "/dynamic",
        component: DynamicManage
    }

]

export { items, menus } 