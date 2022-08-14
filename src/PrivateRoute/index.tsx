import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuth } = useAppSelector((state) => state.auth);
  return isAuth ? children : <Navigate to="/login" />;
}
