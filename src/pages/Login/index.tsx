import { Card } from 'antd';
import React from 'react';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <Card title="Login" style={{ width: 300 }}>
      <LoginForm />
    </Card>
  );
}
