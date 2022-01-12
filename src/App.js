import React, { useState, useEffect} from "react";
import './App.css';
import Home from "./pages/Home";

function App() {

  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPokelist = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    const response = await fetch(url)
    const data = await response.json()
    // have an array of all the pokemon urls
    const urls = await data.results.map((pokemon, index) => pokemon.url)
    const newData = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    // update state to hold all pokemon details
   setPokemonDetails(newData)
   setIsLoaded(true) 
  }


  useEffect(() => {
    getPokelist();
  },[])

  return ( isLoaded ?
    <div className="App">
      <Home pokemonDetails={pokemonDetails}/>
    </div>
    : 
    <div>
      <h2 style={{textAlign:"center", color: "red"}}>Gotta Catch em All</h2>
      <img src={'https://articles.pokebattler.com/wp-content/uploads/2018/08/pokedex-kanto-1.jpg'}/>
    </div>
  );
}

export default App;