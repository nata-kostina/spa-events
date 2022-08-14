import { Layout } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import Navigation from '../../components/Navigation';

const Homepage = () => {
  const isAuth = true;
  return (
    <Layout className="wrapper">
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Layout>
          <Content>main content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Homepage;
