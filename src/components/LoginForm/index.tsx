/* eslint-disable import/no-useless-path-segments */
import {
  Form, Input, Checkbox, Button, Alert, Modal,
} from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../store';
import Actions from '../../store/store_types/actions';
import { SPARoutes } from '../../types/types';
import rules from '../../utils/rules';
import UserService from './../../api/UserService';

const LoginForm = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onFinish = (values: { email: string, password: string }) => {
    const user = UserService.getUser(values);
    if (user) {
      dispatch({ type: Actions.SET_AUTH, payload: true });
    } else {
      Modal.error({
        title: 'Error',
        content: 'The user with such email and password is not found. Please try again.',
      });
    }
  };

  return (
    <>
      {isAuth && <Navigate to={SPARoutes.EVENTS} />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[rules.required('Please input your email!'), rules.isEmailValid('Email is not correct!')]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[rules.required('Please input your password!')]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
