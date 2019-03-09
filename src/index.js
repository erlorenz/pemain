import { render } from 'react-dom';
import React from 'react';
// import App from '@/App';
import App from '@/App';
// import '@babel/polyfill'; Using 'usage'
import 'sanitize.css';

render(<App />, document.querySelector('#app'));

// Hot module reloading
module.hot.accept();
