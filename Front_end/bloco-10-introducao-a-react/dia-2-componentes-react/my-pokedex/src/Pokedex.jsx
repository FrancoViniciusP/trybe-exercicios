import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
    render(){
        const pokemons = this.props.pokemon;
        return(
            <div className='allCards'>
              { pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>) }
            </div>
        )
    }
}

export default Pokedex;