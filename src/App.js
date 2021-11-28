import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBackToTop } from 'vanilla-back-to-top';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import LoaderComponent from './components/LoaderComponent/LoaderComponent';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-view" */
  ),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#fa7584',
    });
  }, []);

  return (
    <Container>
      <Header />

      <Suspense fallback={<LoaderComponent />}>
        <Routes>
          <Route path="/" exact
            element ={<HomePage />} />
        

          <Route path="/movies" exact
            element ={<MoviesPage />} />
          

          <Route path="/movies/:slug"
            element ={<MovieDetailsPage />} />
         

          <Route
            element ={<NotFoundView />} />
          
        </Routes>
      </Suspense>

      <ToastContainer autoClose={3700} position="bottom-center" />
    </Container>
  );
}

export default App;