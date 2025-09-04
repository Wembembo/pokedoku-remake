import React from "react";
import fetchData from "./pokeApi";

function Table(){
    return(
        <div className="box">
            <h2>Pokedoku Remake</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Criteria 1</th>
                        <th>Criteria 2</th>
                        <th>Criteria 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Criteria 4</th>
                        <td>
                            <img id="pokemonSprite-0"></img><br/>
                            <input id="pokemonName-0" type="text"></input><br/>
                            <button onClick={() => fetchData(0)}>Submit Guess</button>
                        </td>
                        <td>
                            <img id="pokemonSprite-1"></img><br/>
                            <input id="pokemonName-1" type="text"></input><br/>
                            <button onClick={() => fetchData(1)}>Submit Guess</button>
                        </td>
                        <td>
                            <img id="pokemonSprite-2"></img><br/>
                            <input id="pokemonName-2" type="text"></input><br/>
                            <button onClick={() => fetchData(2)}>Submit Guess</button>
                        </td>
                    </tr>
                    <tr>
                    <th>Criteria 5</th>
                        <td>
                            <img id="pokemonSprite-3"></img><br/>
                            <input id="pokemonName-3" type="text"></input><br/>
                            <button onClick={() => fetchData(3)}>Submit Guess</button>
                        </td>
                        <td>
                            <img id="pokemonSprite-4"></img><br/>
                            <input id="pokemonName-4" type="text"></input><br/>
                            <button onClick={() => fetchData(4)}>Submit Guess</button>
                        </td>
                        <td>
                            <img id="pokemonSprite-5"></img><br/>
                            <input id="pokemonName-5" type="text"></input><br/>
                            <button onClick={() => fetchData(5)}>Submit Guess</button>
                        </td>
                    </tr>
                    <tr>
                    <th>Criteria 6</th>
                        <td>
                            <img id="pokemonSprite-6"></img><br/>
                            <input id="pokemonName-6" type="text"></input><br/>
                            <button onClick={() => fetchData(6)}>Submit Guess</button>
                        </td>
                        <td>
                            <img id="pokemonSprite-7"></img><br/>
                            <input id="pokemonName-7" type="text"></input><br/>
                            <button onClick={() => fetchData(7)}>Submit Guess</button>
                        </td>
                        <td>
                            <img id="pokemonSprite-8"></img><br/>
                            <input id="pokemonName-8" type="text"></input><br/>
                            <button onClick={() => fetchData(8)}>Submit Guess</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;