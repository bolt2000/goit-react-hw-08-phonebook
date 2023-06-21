import { NavLink } from 'react-router-dom';
// import { UserMenu } from './UserMenu';
import css from './HeadNav.module.css';


export default function HeadNav () {
 return (
   <>
     <nav className={css.ul}>
       <ul className={css.ul_nav}>
         <li className={css.li}>
           <NavLink to="/">Home</NavLink>
         </li>
         <li>
           <NavLink to="/register">Register</NavLink>
         </li>
         <li>
           <NavLink to="/login">Login</NavLink>
         </li>
       </ul>
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
