let pokeData = {};
let pokeAbilities = [];
let pokeStats = [];
let pokeInfoContainer = document.getElementById('pokeInfoContainer');

fetch(url2).then(response=>response.json()).then(data2=>{

    pokeData = data2;
    pokeAbilities = data2.abilities;
    pokeStats = data2.stats
    console.log(data2)
    showPokemonTitle();
    showPokeData();


    
})


function showPokemonTitle(){

    let pokeNameTitle = document.getElementById('pokeNameTitle');
    pokeNameTitle.innerHTML = pokeData.name;
    let pokeTitleTag = document.getElementById('title')
    pokeTitleTag.innerHTML = pokeData.name + ` chosen`;

}

function showPokeData(){

    let pokeDivInfo = document.createElement('div');
    pokeDivInfo.setAttribute(`class`, `align-items-center justify-content-center text-center my-3`);
    pokeInfoContainer.appendChild(pokeDivInfo);

    pokeDivInfo.innerHTML = `
    
    <img src='${pokeData.sprites.front_default}'></img>

    <h3>Habilidades</h3>

    `;

    for(let ability of pokeAbilities){

        pokeDivInfo.innerHTML += `<li>‣${ability.ability.name}<li>`

    }
    
    pokeDivInfo.innerHTML += `
    
    <h3> Stats </h3>

    `;

    for(let stat of pokeStats){

        pokeDivInfo.innerHTML += `<li>‣${stat.stat.name}: ${stat.base_stat} <li> `

    }



  

}
