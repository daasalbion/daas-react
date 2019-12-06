import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Turn from './Components/Turn/Turn';
import Continue from './Components/Continue/Continue';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({turnData}) => {
  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Turn {...turnData}></Turn>
      <Continue></Continue>
      <Footer></Footer>
    </div>
  )
};

export default App;
