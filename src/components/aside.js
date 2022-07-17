import React, { memo, useState } from 'react'
import { Menu, Layout } from 'antd';
import { withRouter } from "react-router-dom"
import { AntDesignOutlined } from "@ant-design/icons"
import { items } from '../router/menuItems';

import "./layout.scss"

const { Sider } = Layout;
const DyAside = memo((props) => {
    const [collapsed, setCollapsed] = useState(false);
    //菜单点击事件
    const handleClickMenu = e => {
        console.log(e.key, props, 'eeee');
        props.history.push(e.key)
    }

    //点击logo
    const handleClickLogo = () => {
        props.history.push("/home")
    }
    console.log(props.location.pathname);
    const currentSelectMenu = [props.location.pathname]
    const currentOpenKeys = [props.location.pathname.split("-")[0]]
    return (
        <Sider className="Sider" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo">
                <div className="logo-link" onClick={handleClickLogo}>
                {!collapsed  &&  <AntDesignOutlined />}
                  <span>Antd</span>
                </div>
            </div>
            <Menu theme="dark" defaultSelectedKeys={currentSelectMenu} defaultOpenKeys={currentOpenKeys} selectedKeys={currentSelectMenu} mode="inline" items={items} onClick={handleClickMenu} />
        </Sider>
    )
})

export default withRouter(DyAside)