import React, { useState, useEffect} from "react";
import './App.css';
import Home from "./pages/Home";

function App() {

  const [pokelist, setPokelist] = useState([])

  const getPokelist = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    const response = await fetch(url)
    const data = await response.json()
    setPokelist(data.results)
  };

  useEffect(() => {
    getPokelist()
  }, [])

  return (
    <div className="App">
      <Home pokelist={pokelist}/>
    </div>
  );
}

export default App;
