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

export const items = [
    getItem('首页', '/home', <PieChartOutlined />),
    getItem('动态管理', '/dynamic', <DesktopOutlined />, [
        getItem('动态列表', '/dynamic-list', <DesktopOutlined />),
    ]),
    getItem('评论管理', '/comment', <UserOutlined />, [
        getItem('热门评论', '/comment-hot'),
        getItem('评论列表', '/comment-list'),
    ]),
    getItem('用户信息', '/user-info', <UserOutlined />),
];
