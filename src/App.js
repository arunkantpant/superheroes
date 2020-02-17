import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.css';

class App extends Component {
  state = {
    heroes: [
      {name: 'Geralt', power: 'Witcher'},
      {name: '2B', power: 'Android'},
      {name: 'Aloy', power: 'Nora Brave'},
      {name: 'Emily Caldwin', power: 'Master Assassin'},
      {name: 'Artyom', power: 'Master Survivor'},
      {name: 'Dohvakiin', power: 'Dragonborn'}
    ]
  };

  render() {
    const heroesDiv = this.state.heroes.map(hero => (
        <div className={classes.heroCard}>
          <h1>{hero.name}</h1>
          <h3>{hero.power}</h3>
        </div>
    ));

    return (
      <>
        <div>
          <h1 style={{
            textAlign: "center",
            fontSize: "40px"
          }}>My Heroes</h1>
        </div>
        <div className={classes.App}>
          {heroesDiv}
        </div>
      </>
    );
  }
}

export default App;
