const listaPokemons = document.getElementById('pokemons');

const urlByType =   'https://pokeapi.co/api/v2/type/3';

const putOnScreen = (pokemonObj) => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const span = document.createElement('span');
    const { pokemon: { name, url } } = pokemonObj;
    h2.innerText = name;
    h2.className = 'name';
    span.innerText = url;
    span.className = 'url';
    div.appendChild(h2);
    div.appendChild(span);
    listaPokemons.appendChild(div);

    return div;    
}

const addClick = () => {
    const urls = Array.from(document.getElementsByClassName('url')); 
    //console.log(urls);
    urls.forEach((url) => { 
        url.addEventListener('click', () => {
            console.log('deu certo');
            fetch(url.innerText)
              .then((response) => (response.json()))
              .then((data) => console.log(data));
        });
     });   
};

const fetchPokemonByType = (url) => {
    const pokemonByType = fetch(url)
      .then((response) => response.json())
      .then((data) => { 
          data.pokemon.forEach((pokemon) => {
              putOnScreen(pokemon);
          });
          addClick();
        });
}

fetchPokemonByType(urlByType);