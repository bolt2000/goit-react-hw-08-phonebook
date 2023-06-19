// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import React from 'react';
// import { Layout } from './Layout';

// const Home = lazy(() => import('../pages/Home'));
// const SearchMovie = lazy(() => import('../pages/SearchMovie'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));

// const Cast = lazy(() => import('../components/Cast'));
// const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>TEST</div>}/>

    </Routes>
  );
};
