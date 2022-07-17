import React, { memo, useState } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd';

import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons"
import "./layout.scss"
import { withRouter } from 'react-router-dom';

const { Header } = Layout
const DyHeader = ((props) => {

    // 点击下拉菜单
    const handleDropMenu = (e) => {
        console.log(e.key);
        const menuList = ["/user-info", "/login"]
        props.history.push(menuList[e.key])
        if(e.key == 1){
            localStorage.removeItem("token")
        }
    }
    const menu = (
        <Menu onClick={handleDropMenu} items={[
            {
                label: '用户信息',
                key: 0,
            },
            {
                label: '退出登录',
                key: 1,
                danger: true
            },
        ]}>

        </Menu>
    )
    const [collapsed, setCollapsed] = useState(true)

    const changeCallapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Header className="site-layout-background">
            <div className='collapse'>
                {collapsed ? <MenuFoldOutlined onClick={changeCallapsed} /> : <MenuUnfoldOutlined onClick={changeCallapsed} />}
            </div>

            <div className='info'>
                <span>欢迎登录：{localStorage.getItem("name")}</span>
                {/* 下拉菜单 */}
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
})

export default withRouter(DyHeader)