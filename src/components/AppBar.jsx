import Navigation from './Navigation/AuthNav';
import { UserMenu } from './UserMenu';
import { Route, Routes, NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export default function AppBar() {
  return (
    <nav>
      <ul className={css.nav}>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </nav>
  );
}
