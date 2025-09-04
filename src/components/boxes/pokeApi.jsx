// pokeApi.jsx
async function fetchData(index){
    try{ 
        const pokemonName = document.getElementById(`pokemonName-${index}`).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not locate resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById(`pokemonSprite-${index}`);

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch(error){
        console.error(error);
    }
};
export default fetchData;
