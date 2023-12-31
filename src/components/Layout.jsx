import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from 'components/Loading';
import HeadNav from 'components/Navigation/HeadNav/HeadNav';
import UserName from './UserMenu/UserName';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>{isLoggedIn ? <UserName /> : <HeadNav />}</header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
