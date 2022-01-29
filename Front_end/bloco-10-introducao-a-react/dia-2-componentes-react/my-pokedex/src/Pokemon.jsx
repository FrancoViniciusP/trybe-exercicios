import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render(){
        const { name, type, image, averageWeight: {value, measurementUnit}} = this.props.pokemon;
        return (
            <div className= 'pokemon'>
                <h1>{name} </h1>
                <p>{ type }</p>
                <img src={image} alt="the pokemon" />
                <p>{ value } { measurementUnit }</p>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
        image: PropTypes.string,
    }).isRequired,
}

export default Pokemon;