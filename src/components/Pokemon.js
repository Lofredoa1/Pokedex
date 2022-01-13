import React from "react";
import Header from "./Header";
import "../App.css";

function Pokemon(props) {
    return(
    <>
        <Header/>
        <div className="details">
            <div className="name-and-imgs">
                <img src={props.selected.sprites.front_default} alt={props.selected.name} />
                <img src={props.selected.sprites.front_shiny} alt={props.selected.name} />
                <h1>{props.selected.name}</h1>
            </div>
            <div className="stats">
                <h3>Height: {props.selected.height / 10} m</h3>
                <h3>Weight: {props.selected.weight /10} kg</h3>
                <h3>TYPE: {props.selected.type}</h3>
            </div>
            <button onClick={() => props.handleClick(props.selected)}>
            {props.label}
            </button>
        </div>
    </>
    );
  };
  
  export default Pokemon