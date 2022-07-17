import React from 'react'

import { Switch, Route, Redirect } from "react-router-dom"

import { Layout } from 'antd';
import DyHeader from './header';
import DyAside from './aside';

import Home from '../pages/home'
import DynamicManage from "@/pages/dynamicManage/index"
import NoPromission from '@/pages/no-promission'
import UserInfo from "@/pages/userInfo/userInfo"


const { Content, Footer } = Layout;
export default function DyLayout() {

    return (
        <Layout style={{ minHeight: '100vh', }}>
            {/* 菜单栏 */}
            <DyAside />
            <Layout className="site-layout">
                {/* 头部内容 */}
                <DyHeader />
                <Content
                    style={{
                       background:"#fff",
                       padding:"20px",
                       margin:"20px"
                    }}
                >
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/dynamic-list" component={DynamicManage} />
                        <Route path="/user-info" component={UserInfo} />
                        <Redirect from="/" to="/home" exact />
                        <Route path="*" component={NoPromission} />
                    </Switch>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )

}
