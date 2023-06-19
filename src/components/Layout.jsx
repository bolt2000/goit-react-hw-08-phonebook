import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Loading from 'components/Loading';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
        <div class="wrap-logo">
          <a href="index.html" class="logo">
            <img src={'../img/kino.png'} width={160} alt="" />
          </a>
        </div>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
