import { Layout } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import Navigation from '../../components/Navigation';

const Homepage = () => {
  const isAuth = true;
  return (
    <BaseLayout>
      <Content>main content</Content>
    </BaseLayout>
  );
};

export default Homepage;
