import { useEffect } from 'react';
// import Form from './Phonebook/Form';
// import ContactList from './ContactsList/ContactsList';
import css from './App.module.css';
// import Filter from './Filter/FilterContact';
// import {Menu} from './Navigation/navigation';
// import LogIn from './Navigation/LogIn/LogIn';
// import { Switch } from '@mui/material';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
// import PrivateRoute from './PrivateRoute';
// import Navigation from './Navigation/Navigation';


const Home = lazy(() => import('./Navigation/Home/Home'));
const Book = lazy(() => import('./Navigation/Book/Book'));
const Register = lazy(() => import('./Navigation/Reg/Register'));
const LoginForm = lazy(() => import('./Navigation/LogIn/LogIn'));
// const Form = lazy(() => import('./Phonebook/Form'));
// const ContactList = lazy(() => import('./ContactsList/ContactsList'));
// const Filter = lazy(() => import('./Filter/FilterContact'));




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

          {/* <PrivateRoute path="/book"><Book /></PrivateRoute> */}

          <Route path="book" element={<Book />}/>


            {/* <Route path="form" element={<Form />} /> */}
            {/* <Route path="contactList" element={<ContactList />} /> */}
            {/* <Route path="filter" element={<Filter />} /> */}
          {/* </Route> */}

          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}
