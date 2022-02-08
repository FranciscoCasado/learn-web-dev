axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => console.log(res.data.name))
    .catch(err => console.log("Something went wrong :c", err))

const fetchPokemon = async (pokemon_name) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
        console.log(res.data.name);
    } catch (e) {
        console.log('Somthing went wrong :c', e);
    }
};


const jokeDisplay = document.querySelector('.joke-display');

const getDadJoke = async () => {
    try {
        const headers = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', headers)
        return res.data.joke;
    } catch (e) {
        return "Something went wrong, couln't fetch a joke :c"
    }
}

const updateJoke = async () => {
    const joke = await getDadJoke();
    jokeDisplay.innerText = joke;
}

const jokeButton = document.querySelector('.joke-button');
jokeButton.addEventListener('click', updateJoke)