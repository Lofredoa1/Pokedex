import React from "react";
import Header from "../components/Header";
import "../App.css";
import { useNavigate } from "react-router-dom";

const MyTeam = (props) => {

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

    let navigate = useNavigate();

    return (
    <>
    <Header/>
        {props.team.length > 0 ? 
        <div className="allpokemons" style={{marginTop: '20px'}}>
            {props.team.map((pokemon,index) => (
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
                            props.removeFromTeam(pokemon);
                            }}>Remove</div>
                    </div>
                </div>
            ))}
        </div>
        : 
        <div className='no-team'>
            <img src='https://4.bp.blogspot.com/-d_-chUfrTRI/V5ABhl3Wp_I/AAAAAAAACHU/2zbfrlbMHzoyQk5pmLvYMuLgbRt0A3o5wCLcB/s1600/How%2Bto%2Bcatch%2Ba%2BPokemon.jpg'/>
            <p>Go Catch Some Pokémon!</p>
            </div>}
    </>
    )
}

export default MyTeam