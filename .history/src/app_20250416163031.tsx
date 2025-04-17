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
import SingleServerMetrics from './components/SingleServerMetrics/SingleServerMetrics';



const App = () => {
  return (
    <>
    <Routes>
      <Route path='*' element={<OverviewPage/>}/>
      <Route path='metrics/:id' element={<SingleServerMetrics/>} />
    </Routes>
    </>

  )
}




const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
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
