import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Routes from '../../routes';
import './App.css';

function App() {
  return (
    <div data-testid="app">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
