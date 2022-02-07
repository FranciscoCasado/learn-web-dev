// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for ( let i = 1; i <= 151 ; i++){
    const label = document.createElement('span')
    label.innerText = `#${i}`
    const sprite = document.createElement('img')
    sprite.src = `${baseUrl}${i}.png`;
    
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    pokemon.appendChild(sprite);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
