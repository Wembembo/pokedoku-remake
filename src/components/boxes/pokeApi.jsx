//import criteria for checks
import types from './criteria/criteria.json'

//api fetch function.
async function fetchData(index){
    try{ 
        const pokemonName = document.getElementById(`pokemonName-${index}`).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not locate resource");
        }
        // definitions
        const data = await response.json();
        const imgElement = document.getElementById(`pokemonSprite-${index}`);
        const shinyCheck = Math.floor(Math.random() * 100) + 1; // 1 in 100 chance of shiny
        const shinyRoll = Math.floor(Math.random() * 100) + 1 // rolling for shiny to check if match
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
        //removing the button once submitted to keep things at one guess per box.
        document.getElementById(`button-${index}`).classList.add("invisible");
        const playerGuess = document.getElementById(`playerGuess-${index}`);
        
        //looping through type arrays to log pokemon types
        data.types.forEach(typeInfo => {
            const typeCheck = typeInfo.type.name;
            console.log(typeCheck);
            return typeCheck;
        

        //criteria checks - need to get the criteria from the table headers and compare against the pokemon types
        const criteria1 = document.getElementById("criteria-1").types.id;
        const criteria2 = document.getElementById("criteria-2").types.id;
        const criteria3 = document.getElementById("criteria-3").types.id;
        const criteria4 = document.getElementById("criteria-4").types.id;
        const criteria5 = document.getElementById("criteria-5").types.id;
        const criteria6 = document.getElementById("criteria-6").types.id;

        //cross checks
        if (typeCheck === criteria1 && typeCheck === criteria4){
            playerGuess-$(index).classList.add("correct");
        };
        });
    } catch(error){
        console.error(error);
    }

};
export default fetchData;
