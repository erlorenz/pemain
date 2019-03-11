import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'intersection-observer';
// import '@babel/polyfill'; Using 'usage'
import 'sanitize.css';
import ScrollToTop from './components/ScrollToTop';

const rootElement = document.getElementById('app');

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>,
    rootElement,
  );
} else {
  render(
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>,
    rootElement,
  );
}

// Hot module reloading
if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
