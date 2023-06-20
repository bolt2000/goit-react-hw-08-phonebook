import { useEffect } from 'react';
import css from './App.module.css';

import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';



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

          {/* <PrivateRoute path="/book">
              <Book />
          </PrivateRoute> */}

          {/* <Route exact path="/login" element={<PrivateRoute />}>
            <Route exact path="/book" element={<Book/>} />
          </Route> */}


          <Route exact path="/book" element={
            <PrivateRoute fallbackRoute={"/login"}><Book /></PrivateRoute>}/>

          {/* <Route path="book" element={<Book />} /> */}

          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}
