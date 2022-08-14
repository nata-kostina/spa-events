import React from 'react';
import { Navigate } from 'react-router-dom';
import { JsxElement } from 'typescript';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" />;
}
