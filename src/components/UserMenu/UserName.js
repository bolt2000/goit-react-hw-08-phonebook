import { useDispatch, useSelector } from 'react-redux';
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
       <ul className={css.ul_nav}>
         <li>
           <NavLink to="/">Home</NavLink>
         </li>
         <li>
           <NavLink to="/book">Book</NavLink>
         </li>
       </ul>
       <div className={css.menu}>
         <img className={css.img} srv={avatar} alt="" width="32" height="32" />
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

     <footer></footer>
   </>
 );
};
