import React, { memo, useState } from 'react'
import { Menu, Layout } from 'antd';

import { items } from '../router';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';



const { Sider } = Layout;
const DyAside = memo((props) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleClickMenu = e => {
        console.log(e.key, props, 'eeee');
        props.history.push(e.key)
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" style={{ "background": "red" }}>logo</div>
            <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" items={items} onClick={handleClickMenu} />
        </Sider>
    )
})

export default withRouter(DyAside)