const getPokemon = async() => {
try {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await response.json();
  const PokemonTotal = data.results;
  const pokemonNames = PokemonTotal.map((pokemon) => {
    return `<li>${pokemon.name}</li>`;
  })
  document.querySelector(`ul`).innerHTML=pokemonNames.join(``);
} catch (err) {
  const message = `Sorry, no Pokemon today!`
  render(message);
  console.log(err);
}
}
 getPokemon();

const render = (pokemonArray) => {
  for (i = 0; i < pokemonArray.length; i++){
    const urlArray = pokemonArray[i].url.split(`/`)
    const urlIdx = urlArray[6]
    const ul = document.querySelector(`ul`);
    ul.innerHTML += `<a href=`` data-pokemon-number=`>`${urlIdx}
    <li>${pokemonArray[i].name}</li></a>`
  }
}