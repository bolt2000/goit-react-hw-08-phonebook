// import { } from 'redux/auth/auth-selectors';
// import React from 'react';
// // import css from './LogIn.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// // import { addContact, listContacts } from 'redux/contactAPI';
// import { logOut } from 'redux/auth/auth-operations';
// import defaultAvatar from '../../../img/default-avatar.png';
// import { NavLink } from 'react-router-dom';
// import { selectUser } from 'redux/auth/auth-selectors';
// import css from '../../Layout.module.css';
import Form from '../../Phonebook/Form';
import Filter from '../../Filter/FilterContact';
// import contactsList from '../../ContactsList/ContactsList';
import ContactList from '../../ContactsList/ContactsList';

export default function Book() {
  // const dispatch = useDispatch();
  // const name = useSelector(selectUser);
  // const avatar = defaultAvatar;

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/">home2</NavLink>
          </li>
          <li>
            <NavLink to="/book">Book</NavLink>
          </li>
        </ul>
        <img srv={avatar} alt="" width="32" />
        <span>Welcome, {name.name}</span>
        <button type="button" onClick={() => dispatch(logOut())}>
          Exit
        </button>
      </nav> */}

      <main>

            <Form />

            <Filter />

            <ContactList />


        {/* <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense> */}
      </main>
      <footer></footer>
    </>
  );
}
