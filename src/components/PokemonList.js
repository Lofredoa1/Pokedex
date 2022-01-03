function PokemonList(props) {
    return (
        <div>
            {props.pokelist.map((pokemon, index) => {
                let num = index + 1
                console.log(num)
                return (
                    <h1 onClick={() => props.selectPokemon(pokemon)} key={index}>#{num} {pokemon.name}</h1>
                )
            })}
        </div>
    )
}

export default PokemonList