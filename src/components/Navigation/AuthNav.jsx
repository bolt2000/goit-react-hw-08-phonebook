import { NavLink } from 'react-router-dom';
// import { UserMenu } from './UserMenu';
import css from '../Layout.module.css';


export default function AuthNav () {
 return (
   <>

       <nav>
         <ul>
           <li>
             <NavLink to="/register">Register1</NavLink>
           </li>
           <li>
             <NavLink to="/login">Log In</NavLink>
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
