import React from "react";
import "../App.css";

const PokemonCard = (props) => {

    const { pokemonDetails} = props;

    return ( 
        <>
        <div className="allpokemons">
            {pokemonDetails.map((pokemon,index) => (
                    <div className="pokemoncard">
                        <h2>#{pokemon.id} - {pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt="pokemon"/>
                    </div>
                ))
            }
        </div>
        </>
    )
}


export default PokemonCard