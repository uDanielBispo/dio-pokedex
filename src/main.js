
function convertPokemonToHTML(pokemon){
    return `<li>
        <span class="number">#${pokemon.num}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.img}" alt="${pokemon.name}">
        </div>
    </li>`
}

pokeApi.getPokemons().then((pokemonList = []) =>{
    
    //const listItems = pokemonList.map((pokemon) => convertPokemonToHTML(pokemon));
    //iguais 
    //const listItems = pokemonList.map(convertPokemonToHTML);

    // for(let i = 0; i < pokemonList.length; i++){
    //     const pokemon = pokemonList[i];
    // }

    document.getElementById('pokemonList').innerHTML = pokemonList.map(convertPokemonToHTML).join('');
})

