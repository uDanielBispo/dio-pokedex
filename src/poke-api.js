const pokeApi = {};

function convertPokeApiDetailToFullDetailPokemon(pokeDetail){
    let pokemon = convertPokeApiDetailToPokemon(pokeDetail);


}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.num = pokeDetail.id;
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.mainType = type;

    pokemon.types = types;
    pokemon.img = pokeDetail.sprites.other.dream_world.front_default;

    pokemon.abilities = pokeDetail.abilities;
    pokemon.moves = pokeDetail.moves;
    

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((res) => res.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    //fetch retorna uma promisse (promessa de um resultado)
    //then processa o resultado de uma promisse
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}

