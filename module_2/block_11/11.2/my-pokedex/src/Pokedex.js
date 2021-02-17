import React, { Component } from 'react'
import Pokemon from './Pokemon'

class Pokedex extends Component {
    render() {
        return (
            <section className='Pokemon-list'>
                {this.props.pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
            </section>
            );
    }
}

export default Pokedex