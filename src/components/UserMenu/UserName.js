// import { } from 'redux/auth/auth-selectors';
// import React from 'react';
// // import css from './LogIn.module.css';
import { useDispatch, useSelector } from 'react-redux';
// // import { addContact, listContacts } from 'redux/contactAPI';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from 'default-avatar.jpg';
import { NavLink } from 'react-router-dom';
import { selectUser } from 'redux/auth/auth-selectors';
import css from '../Layout.module.css';




export default function Navigation() {

const dispatch = useDispatch();
const name = useSelector(selectUser);
const avatar = defaultAvatar;


 return (
   <>
     <nav>
       <ul>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
         <li>
           <NavLink to="/book">Book</NavLink>
         </li>
       </ul>
       <div className={css.menu}>
         <img className={css.img} srv= {avatar} alt="" width="32" height="32" />
         <span className={css.span}>Welcome, {name.name}</span>
         <button
           className={css.btn}
           type="button"
           onClick={() => dispatch(logOut())}
         >
           Exit
         </button>
       </div>
     </nav>

     <main>
       {/* <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense> */}
     </main>
     <footer></footer>
   </>
 );
};
