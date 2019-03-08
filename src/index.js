import {render} from 'react-dom';
import React from 'react';
import App from '@/App.js'
// import '@babel/polyfill'; Using 'usage'
import 'sanitize.css';

render(<App />, document.querySelector('#app'));

module.hot.accept();
