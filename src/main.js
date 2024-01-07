const pokemonListHtml = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords= 151;

const limit = 5;
let offset = 0;

loadMoreButton.addEventListener('click', () => {

    offset += limit;
    const qtdRecords = offset + limit;

    if(qtdRecords >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.style.display = 'none';
        return;
    }
    else{
        loadPokemonItens(offset, limit);
    }
})

function convertPokemonToHTML(pokemon){
    return `<li class='${pokemon.mainType}'>
        <span class="number">#${pokemon.num}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="${type}" >${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.img}" alt="${pokemon.name}">
        </div>
    </li>`
}

loadPokemonItens(offset, limit);
function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) =>{
        //const listItems = pokemonList.map((pokemon) => convertPokemonToHTML(pokemon));
        //iguais 
        //const listItems = pokemonList.map(convertPokemonToHTML);
        // for(let i = 0; i < pokemonList.length; i++){
        //     const pokemon = pokemonList[i];
        // }
    
        pokemonListHtml.innerHTML += pokemonList.map(convertPokemonToHTML).join('');
    })
}


