import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Game from './components/Game';
import bojack from './components/bojack.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Game list = {bojack}/>
      </div>
    );
  }
}

export default App;
