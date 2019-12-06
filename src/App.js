import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Turn from './Components/Turn/Turn';
import Continue from './Components/Continue/Continue';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero></Hero>
        <Turn></Turn>
        <Continue></Continue>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
