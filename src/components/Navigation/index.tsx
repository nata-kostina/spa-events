import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Login from '../../pages/Login';
import Actions from '../../store/store_types/actions';
import { SPARoutes } from '../../types/types';

const Navigation = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch({ type: Actions.SET_AUTH, payload: false });
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item>
        { !isAuth && <Link to={SPARoutes.LOGIN}>Login</Link>}
        { isAuth && <Link onClick={handleLogoutClick} to={SPARoutes.HOMEPAGE}>Logout</Link>}
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
