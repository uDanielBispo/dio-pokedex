const pokemonListHtml = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const pokedex = document.getElementById('pokedex');
const detailSection = document.getElementById('detailSection');
const backLink = document.getElementById('backLink');

detailSection.style.display = 'none';
backLink.style.display = 'none';

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
    return `<li onclick="showDetail(${pokemon.num-1})" class='${pokemon.mainType}'>
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

function convertToHTMLDetail(pokemon){
    return `
        <div class="${pokemon.mainType} pokeInfoGeneral" >
            <h2 class="pokeName">${pokemon.name}</h2>
            <img class="pokeImg" src="${pokemon.img}" alt="">
            <h3>Index number #${pokemon.num}</h3>
            <div class="pokeInfos">
                <div>
                    <h3>Abilities</h3>
                    <ol class="abilities">
                        ${pokemon.abilities.map((ability) =>  `<li class="${pokemon.mainType}" >${ability.ability.name}</li>`).join('')}
                    </ol>
                </div>
                <div>
                    <h3>Moves</h3>
                    <ol>
                        ${pokemon.moves.map((moves) =>  `<li class="${pokemon.mainType}" >${moves.move.name}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
    `
}

loadPokemonItens(offset, limit);

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) =>{
        pokemonListHtml.innerHTML += pokemonList.map(convertPokemonToHTML).join('');
    })
}

function showDetail(pokeNum){
    pokeApi.getPokemons(pokeNum, 1).then((pokemonList = []) => {
        detailSection.innerHTML = pokemonList.map(convertToHTMLDetail);
    })
    pokedex.style.display = 'none';
    detailSection.style.display = 'block';
    backLink.style.display = 'block';

}