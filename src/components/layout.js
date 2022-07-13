import React, { Component } from 'react'
import { Breadcrumb, Layout } from 'antd';
import { Outlet } from 'react-router';

import { menus } from '../router';
import DyHeader from './components/header';
import DyAside from './components/aside';
import { renderRoutes } from 'react-router-config/cjs/react-router-config.min';


const { Content, Footer } = Layout;
export default class layout extends Component {
    render() {
        return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                {/* 菜单栏 */}
                <DyAside />
                <Layout className="site-layout">
                    {/* 头部内容 */}
                    <DyHeader />
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            {renderRoutes(menus)}
                        </div>
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
}
