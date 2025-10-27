
(async ()=> {

     const randomPokemon = Math.floor(Math.random() * 150)

     const getJsonFrom = async url => {
          const response = await fetch(url)
          return await response.json()
     }     
     
     const getRandomPokemon = async pokemon => {
          const url = 'https://pokeapi.co/api/v2/pokemon/' + randomPokemon
          const json = await getJsonFrom(url)
          return json
     }

     const renderPokemon = (pokemon) => {
          const img = document.createElement('img')
          img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon}.png`
          img.alt = pokemon.name
          const div = document.querySelector('div')
          const h3 = document.querySelector('h3')
          div.appendChild(img)
          h3.textContent = pokemon.name.toUpperCase()
     }
      
     const pokemon = await getRandomPokemon()
     renderPokemon(pokemon)

     //console.log(pokemon)

})()
   
