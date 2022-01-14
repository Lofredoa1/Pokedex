import React from "react";
import Header from "./Header";
import "../App.css";

function Pokemon(props) {

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


    return(
    <>
        <Header/>
        <div className="details" style={{backgroundColor: typeColors[`${props.selected.types[0].type.name}`]}}>
            <div className="name-and-imgs">
                <div className="imgs">
                    <img src={props.selected.sprites.front_default} alt={props.selected.name} />
                    <img src={props.selected.sprites.front_shiny} alt={props.selected.name} />
                </div>
                <h1>{props.selected.name}</h1>
            </div>
            <div className="stats">
                <div className="main-stats">
                    <h3>Height: {props.selected.height / 10} m</h3>
                    <h3>Weight: {props.selected.weight /10} kg</h3>
                </div>
                <div className="types">
                    <h3 className="type" >Type: <span style={{backgroundColor: typeColors[`${props.selected.types[0].type.name}`]}}>{props.selected.types[0].type.name}</span></h3>
                    {props.selected.types[1] ? <h2 style={{backgroundColor: typeColors[`${props.selected.types[1].type.name}`]}}>{props.selected.types[1].type.name}</h2> : null}
                </div>
                <div className="base-stats">
                    <h3>{props.selected.stats[0].stat.name} : {props.selected.stats[0].base_stat}</h3>
                    <h3>{props.selected.stats[1].stat.name} : {props.selected.stats[1].base_stat}</h3>
                    <h3>{props.selected.stats[2].stat.name} : {props.selected.stats[2].base_stat}</h3>
                    <h3>{props.selected.stats[3].stat.name} : {props.selected.stats[3].base_stat}</h3>
                    <h3>{props.selected.stats[4].stat.name} : {props.selected.stats[4].base_stat}</h3>
                    <h3>{props.selected.stats[5].stat.name} : {props.selected.stats[5].base_stat}</h3>
                </div>
            </div>
            <button onClick={() => props.handleClick(props.selected)}>
            {props.label}
            </button>
        </div>
    </>
    );
  };
  
  export default Pokemon