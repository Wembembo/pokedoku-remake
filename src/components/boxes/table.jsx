import React from "react";
import fetchData from "./pokeApi";
import './table.css'
import types from './criteria/criteria.json'

function criteriaSelector(types){
    const criteriaRoll = Math.floor(Math.random() * types.length);
    const selection = types[criteriaRoll]
    console.log(criteriaRoll, selection);
    return selection.display;
};

function Table(){
    return(
        <div className="box">
            <h2>Pokedoku Remake</h2>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <th id="criteria-1">{criteriaSelector(types.types)}</th>
                        <th id="criteria-2">{criteriaSelector(types.types)}</th>
                        <th id="criteria-3">{criteriaSelector(types.types)}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="guessRow">
                        <th id="criteria-4" >{criteriaSelector(types.types)}</th>
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
                    <tr class="guessRow">
                    <th id="criteria-5">{criteriaSelector(types.types)}</th>
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
                    <tr class="guessRow">
                    <th id="criteria-6">{criteriaSelector(types.types)}</th>
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