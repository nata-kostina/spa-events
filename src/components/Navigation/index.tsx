import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';
import { SPARoutes } from '../../types/types';

const Navigation = () => (
  <Menu mode="horizontal">
    <Menu.Item>
      <Link to={SPARoutes.LOGIN}>Login</Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;
