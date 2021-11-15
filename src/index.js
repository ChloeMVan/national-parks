import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
   <Header />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

