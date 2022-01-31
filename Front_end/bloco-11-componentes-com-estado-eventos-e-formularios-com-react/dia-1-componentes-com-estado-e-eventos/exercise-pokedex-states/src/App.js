import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';


class App extends Component {
  constructor() {
    super();
    this.state = {
      type: pokemons,
      value: 0,
    };
    this.addValue = this.addValue.bind(this);  
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterByType = this.filterByType.bind(this);
  }

  addValue() {
    if(this.state.value === 8) {
      this.setState({value: 0});
    } else {
      this.setState(({ value }) => ({value: value += 1}));
    }
    this.nextPokemon(this.state.value);
  }

  nextPokemon(number) {
    this.setState({type: [pokemons[number]]});
  }

  filterByType(model) {
    if(model === 'All Pokemons') {
      this.setState({type: pokemons});
    } else {
      this.setState(({type: pokemons.filter((pokemon) => pokemon.type === model)}));
    }
  }
 

  render() {
    return (
      <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={this.state.type} />
      <button onClick={this.addValue}>Next Pokemon</button>
      <button onClick={() => this.filterByType('Electric')}>Electric</button>
      <button onClick={() => this.filterByType('Fire')}>Fire</button>
      <button onClick={() => this.filterByType('Bug')}>Bug</button>
      <button onClick={() => this.filterByType('Poison')}>Poison</button>
      <button onClick={() => this.filterByType('Psychic')}>Psychic</button>
      <button onClick={() => this.filterByType('Normal')}>Normal</button>
      <button onClick={() => this.filterByType('Dragon')}>Dragon</button>
      <button onClick={() => this.filterByType('All Pokemons')}>All Pokemons</button>
    </div>
  );
 } 
}

export default App;