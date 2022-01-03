import React, { useState } from "react";
import PokemonList from "../components/PokemonList";

const Home = (props) => {

    const [selected, setSelected] = useState(null);

    const selectPokemon = async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setSelected({
            id: data.id,
            name: data.name
        })
    }
  
    return <div>
        <PokemonList pokelist={props.pokelist} selectPokemon={selectPokemon}/>
    </div>
}

export default Home