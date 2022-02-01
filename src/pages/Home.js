import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = (props) => {

    const { pokemonDetails} = props

    let navigate = useNavigate();

    const typeColors = {
        normal : "#A8A878",
        fire : "#F08031",
        water : "#6890F0",
        grass : "#77C850",
        electric : "#F8D030",
        flying : "#A890F0",
        poison : "#9E3E9E",
        ice : "#98D8D8",
        fighting : "#C03027",
        bug : "#A8B820",
        ground : "#E0C068",
        psychic : "#F85888",
        rock : "#B8A038",
        dragon : "#7038F8",
        fairy : "#F0B6BC",
        ghost : "#705898",
        steel : "#B8B8CF"
    };

    return <div>
        <Header/>
        <div className="allpokemons">
            {pokemonDetails.map((pokemon,index) => (
                <div className="pokemoncard" key={index} style={{backgroundColor: typeColors[`${pokemon.types[0].type.name}`]}} >
                    <h3 className="pokemonID"><span>#{pokemon.id}</span></h3>
                    <img src={pokemon.sprites.front_default} alt="pokemon"/>
                    <div className="info"></div>
                    <h1>{pokemon.name}</h1>
                    <div className="types">
                        <h2>{pokemon.types[0].type.name}</h2>
                        {pokemon.types[1] ? <h2 style={{backgroundColor: typeColors[`${pokemon.types[1].type.name}`]}}>{pokemon.types[1].type.name}</h2> : null}
                    </div>
                    <div className='buttons'>
                        <div className='info-button' onClick={() => {
                        props.selectPokemon(pokemon);
                        navigate('/current')
                        }}>More info
                        </div>
                        <div className="add-remove-button" onClick={() => {
                            props.addToTeam(pokemon);
                            const capitalzie = (pokemon.name) = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) 
                            alert(`${capitalzie} has been added to team!`)
                            }}>Add to Team</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
};

export default Home