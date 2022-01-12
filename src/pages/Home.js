import React, { useState } from "react";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

const Home = (props) => {
    const { pokemonDetails} = props
    

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
        <Header/>
        <PokemonCard pokemonDetails={pokemonDetails}/>
    </div>
}

export default Home