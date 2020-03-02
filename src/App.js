import React, { Component } from 'react';
import InputHandler from './components/InputHandler/InputHandler';
import logo from './logo.svg';
import classes from './App.module.css';

class App extends Component {
  state = {
    heroes: [
      {id: 1, name: 'Geralt', power: 'Witcher'},
      {id: 2, name: '2B', power: 'Android'},
      {id: 3, name: 'Aloy', power: 'Nora Brave'},
      {id: 4, name: 'Emily Caldwin', power: 'Master Assassin'},
      {id: 5, name: 'Artyom', power: 'Master Survivor'},
      {id: 6, name: 'Dohvakiin', power: 'Dragonborn'}
    ]
  };

  heroPowerChangeHandler = (updatedPower, heroIndex) => {
    // always good to keep things immutable!

    const updatedHeroes = [...this.state.heroes];
    updatedHeroes[heroIndex].power = updatedPower;
    this.setState({heroes: updatedHeroes});
  };

  removeHeroHandler = (heroId) => {
    const myHeroes = [...this.state.heroes];
    console.log(myHeroes);
    const updatedHeroes = myHeroes.filter(hero => hero.id !== heroId);
    this.setState({heroes: updatedHeroes});
  }

  render() {
    const heroesDiv = this.state.heroes.map((hero, index) => (
        <div
          key={hero.id}
          className={classes.heroCard}
          onClick={() => this.removeHeroHandler(hero.id)}
        >
          <h1>{hero.name}</h1>
          <h3>{hero.power}</h3>
          <div>
            <InputHandler
              changeHandler={(e) => this.heroPowerChangeHandler(e.target.value, index)}
              val={hero.power}
            />
          </div>
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
