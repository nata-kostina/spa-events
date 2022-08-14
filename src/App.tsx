import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Events from './pages/Events';
import Login from './pages/Login';
import Homepage from './pages/Homepage/index';
import PrivateRoute from './PrivateRoute';
import { SPARoutes } from './types/types';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SPARoutes.LOGIN} element={<Login />} />
        <Route
          path={SPARoutes.EVENTS}
          element={(
            <PrivateRoute>
              <Events />
            </PrivateRoute>
      )}
        />
        <Route path={SPARoutes.HOMEPAGE} element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
