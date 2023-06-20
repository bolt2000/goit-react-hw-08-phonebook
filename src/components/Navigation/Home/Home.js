import css from '../../Layout.module.css';

const Home = () => {
  return (
    <>
      <main>
        <h2 className={css.title}> Its You Phone book </h2>
        <div className={css.hero}></div>



        {/* <h5> Enter in Account </h5> */}

        {/* <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense> */}
      </main>
      <footer>
        <hr></hr>
        <span>Made by bolt2000</span>
      </footer>
    </>
  );
};

export default Home;
