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
import store from './store';



const App = () => {
  return (
    <>
      Start
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
