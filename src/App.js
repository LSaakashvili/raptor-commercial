import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-scroll';
import Home from './components/home';
import Reliable from './components/reliable';
import Power from './components/power';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Reliable />
      <Power />
      <Footer />
    </div>
  );
}

export default App;
