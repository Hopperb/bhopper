import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Jtron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route path='/' component={NavBar}></Route>
        </header>
         <Route path='/' component={Jtron}></Route>
      </div>
    );
  }
}

export default App;
