import css from '../../Layout.module.css';

const Home = () => {
  return (
    <>
      <main>
        <h2 className={css.title}> Its You Phone book </h2>
        <img className={css.hero}
          srv='../img/books.png'
          alt=""
          width="32"
          height="32" />
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
