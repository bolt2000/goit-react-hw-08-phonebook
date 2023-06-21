import { useEffect } from 'react';
import css from './App.module.css';

import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('./Navigation/Home/Home'));
const Book = lazy(() => import('./Navigation/Book/Book'));
const Register = lazy(() => import('./Navigation/Reg/Register'));
const LoginForm = lazy(() => import('./Navigation/LogIn/LogIn'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={css.style}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            exact
            path="/book"
            element={
              <PrivateRoute fallbackRoute={'/login'}>
                <Book />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/login"
            element={
              <PublicRoute fallbackRoute={'/book'} restricted>
                <LoginForm />
              </PublicRoute>
            }
          />

          <Route
            exact
            path="/register"
            element={
              <PublicRoute fallbackRoute={'/'} restricted>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
