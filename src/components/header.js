import React, { memo } from 'react'
import { Layout } from 'antd';

const { Header } = Layout
const DyHeader = (() => {
    return (
        <Header
            className="site-layout-background"
            style={{
                padding: 0,
            }}
        />
    )
})

export default DyHeader