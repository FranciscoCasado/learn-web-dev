
/* Pure fetch */
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error('Request Failed'));


/* Wrapped in async function */
const fetchPokemon = async (pokemon_name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
        const data = await res.json();
        console.log(data.name)
    } catch (e) {
        console.error('Something went wrong', e)
    }
};