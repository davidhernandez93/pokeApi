const url = ` https://pokeapi.co/api/v2/pokemon`;
const url2 = `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('pokeName')}`;
let pokeContainer = document.getElementById('pokeContainer');

let pokeLista = [];
let pokeInfo = {};

fetch(url).then(response => response.json()).then(data => {

    pokeLista = data.results;
    showPokeNames();


});

function showPokeNames (){

    for(let pokemon of pokeLista){

        let pokeDiv = document.createElement('div');
        pokeContainer.appendChild(pokeDiv);
        pokeDiv.setAttribute(`class`, `align-items-center justify-content-center text-center my-3`)

        fetch(pokemon.url).then(response2 => response2.json()).then(pokeInfo => {
    
    

            pokeDiv.innerHTML = `

            <img src='${pokeInfo.sprites.back_default}'> </img>
            <button class="btn btn-outline-dark btn-sm"> ${pokemon.name}! I choose you! </button>
            
            `
            pokeDiv.addEventListener('click', function(){

                localStorage.setItem('pokeName', pokemon.name);
                window.location = 'pokemon.html';

            })

    
        });

    }

}