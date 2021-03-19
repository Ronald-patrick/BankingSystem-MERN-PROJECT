import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop>
      <App/>
    </ScrollToTop>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
