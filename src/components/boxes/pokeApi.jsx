// pokeApi.jsx
async function fetchData(index){
    try{ 
        const pokemonName = document.getElementById(`pokemonName-${index}`).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not locate resource");
        }

        const data = await response.json();
        const imgElement = document.getElementById(`pokemonSprite-${index}`);
        const shinyCheck = Math.floor(Math.random() * 10) + 1; // 1 in 10 chance of shiny
        const shinyRoll = Math.floor(Math.random() * 10) + 1 // rolling for shiny to check if match
        console.log("shiny check:", shinyCheck, "shiny roll", shinyRoll);
        // if shinyRoll matches shinyCheck, display shiny sprite instead
        if (shinyRoll === shinyCheck) {
            const pokemonSprite = data.sprites.front_shiny;
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } else {
            const pokemonSprite = data.sprites.front_default;
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        }

    } catch(error){
        console.error(error);
    }
};
export default fetchData;
