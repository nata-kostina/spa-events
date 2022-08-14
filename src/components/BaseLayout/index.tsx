import { Layout } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import Navigation from '../Navigation';

const BaseLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <Layout className="wrapper">
    <Header><Navigation /></Header>
    <Content>{ children }</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default BaseLayout;
