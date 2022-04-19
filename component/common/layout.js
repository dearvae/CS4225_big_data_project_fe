import 'antd/dist/antd.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link'
const { Header, Content, Footer } = Layout;

export default function MyLayout({ number, children }) {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[number]}>
                    <Menu.Item key="1">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/race">
                            <a>Crypto Race Graph</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>CS4225 project ©2022 Created by TeamXX</Footer>
        </Layout>
    )
}