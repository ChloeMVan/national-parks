import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';

ReactDOM.render(
  <HashRouter >
   <Header />
    <App />
    <Footer />
  </HashRouter>,
  document.getElementById('root')
);

