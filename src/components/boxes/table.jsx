import React, { useState } from "react";
import fetchData from "./pokeApi";
import './table.css'
import typesData from './criteria/criteria.json'

function Table() {
    // Storing the 6 picked types in a variable named 'criteria'
    const [criteria] = useState(() => {
        const shuffled = [...typesData.types].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6); 
    });

    const renderRow = (rowNum) => {
        const startIndex = rowNum * 3; 
        const rowCriteriaId = rowNum + 4; 

        return (
            <tr key={rowNum} className="guessRow">
                {/* Accessing criteria by the full name now */}
                <th id={`criteria-${rowCriteriaId}`} data-type={criteria[rowNum + 3].id}>
                    {criteria[rowNum + 3].display}
                </th>
                {[0, 1, 2].map((colOffset) => {
                    const index = startIndex + colOffset;
                    return (
                        <td key={index} id={`playerGuess-${index}`}>
                            <div className="sprite-container">
                                <img id={`pokemonSprite-${index}`} alt="" style={{display: 'none'}} />
                            </div>
                            <input id={`pokemonName-${index}`} type="text" placeholder="Pokemon..." />
                            <br />
                            <button id={`button-${index}`} onClick={() => fetchData(index)}>Submit</button>
                        </td>
                    );
                })}
            </tr>
        );
    };

    return (
        <div className="box">
            <table>
                <thead>
                    <tr>
                        <td></td>
                        {/* Updated from c[0] to criteria[0] */}
                        <th id="criteria-1" data-type={criteria[0].id}>{criteria[0].display}</th>
                        <th id="criteria-2" data-type={criteria[1].id}>{criteria[1].display}</th>
                        <th id="criteria-3" data-type={criteria[2].id}>{criteria[2].display}</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRow(0)}
                    {renderRow(1)}
                    {renderRow(2)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;