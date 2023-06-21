import css from '../../Layout.module.css';

const Home = () => {
  return (
    <>
      <main>
        <h2 className={css.title}> Its You Phone book </h2>
        <div className={css.hero}></div>

        {/* <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense> */}
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
