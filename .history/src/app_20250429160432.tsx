import * as React from 'react';

import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";



import './app.scss'
import OverviewPage from './components/OverviewPage/OverviewPage';
import store from './store';

import Header from './components/Header/Header';


const ServerDetailsPage = React.lazy(() => import('./components/ServerDetailsPage/ServerDetailsPage'));
import Loading from './UI/Loading';
import { Suspense } from 'react';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/metrics/:id'         element={
          <Suspense fallback={<Loading />}>
            <ServerDetailsPage />
          </Suspense>
        } />
      </Routes>
    </>

  )
}

const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
