import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';
import Loading from 'components/Loading';
import HeadNav from 'components/Navigation/HeadNav/HeadNav';
import AuthNav from 'components/Navigation/AuthNav';
import UserName from './UserMenu/UserName';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header >
        {/* <AuthNav /> */}
        {isLoggedIn ? <UserName /> : <HeadNav />}

        {/* <HeadNav />
        <UserName /> */}
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
