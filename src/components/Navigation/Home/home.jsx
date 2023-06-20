
// import { Suspense } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import css from './home.module.css';
import Loading from 'components/Loading';

const Home = () => {
  return (
    <>


      <main>
        <h2 > Its You Phonebook </h2>
        {/* <h5> Enter in Account </h5> */}

        {/* <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense> */}
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
