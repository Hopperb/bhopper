import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Jtron from './components/Jumbotron';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route path='/' component={NavBar}></Route>
         <Route exact path='/' component={Jtron}></Route>
         <Route path='/about' component={About}></Route>
      </div>
    );
  }
}

export default App;
