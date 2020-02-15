import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';

class App extends Component {
  state = {
    heroes: [
      {name: 'Geralt', power: 'Witcher'}
    ]
  };

  render() {
    return (
      <div className={classes.App}>
        <h1>{this.state.heroes[0].name}</h1>
        <h3>{this.state.heroes[0].power}</h3>
      </div>
    );
  }
}

export default App;
