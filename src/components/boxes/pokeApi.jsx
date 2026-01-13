import './pokeapi.css'

async function fetchData(index) {
    try {
        const pokemonName = document.getElementById(`pokemonName-${index}`).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            window.alert("Pokemon not found!");
            throw new Error("Resource not found");
        }

        const data = await response.json();
        const pokemonTypes = data.types.map(t => t.type.name); 

        // set criteria
        const colId = (index % 3) + 1; 
        const rowId = Math.floor(index / 3) + 4; 

        const colCriteria = document.getElementById(`criteria-${colId}`).getAttribute('data-type');
        const rowCriteria = document.getElementById(`criteria-${rowId}`).getAttribute('data-type');

        // checks for matches based on user input and the criteria picked
        const matchesCol = pokemonTypes.includes(colCriteria);
        const matchesRow = pokemonTypes.includes(rowCriteria);

        const cell = document.getElementById(`playerGuess-${index}`);
        const imgElement = document.getElementById(`pokemonSprite-${index}`);
        
        if (matchesCol && matchesRow) {
            cell.classList.add("correct");

            // --- shiny checks ---
            const shinyCheck = Math.floor(Math.random() * 100) + 1;
            const shinyRoll = Math.floor(Math.random() * 100) + 1;
            
            //shiny check check
            console.log(`Cell ${index} Shiny Check:`, shinyCheck, "Shiny Roll:", shinyRoll);
            
            const spriteUrl = (shinyRoll === shinyCheck) 
                ? data.sprites.front_shiny 
                : data.sprites.front_default;
            
            if (shinyRoll === shinyCheck) console.log("✨ SHINY FOUND! ✨");
            
            imgElement.src = spriteUrl;
            imgElement.style.display = "block";
        } else {
            cell.classList.add("incorrect");
            imgElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-egg.png";
            imgElement.style.display = "block";
        }

        document.getElementById(`button-${index}`).classList.add("invisible");

    } catch (error) {
        console.error(error);
    }
}

export default fetchData;