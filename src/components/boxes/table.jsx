import React, { useState, useEffect } from "react";
import fetchData from "./pokeApi";
import './table.css';

function Table() {
    const [criteria, setCriteria] = useState(null);

    useEffect(() => {
        async function generateValidGrid() {
            const validTypes = [];
            const seenIds = new Set();

            // 6 unique types (3 for cols, 3 for rows)
            while (validTypes.length < 6) {
                // picking a random Pokemon from Gen 1-9 (1 to 1010) for validation purposes
                const randomId = Math.floor(Math.random() * 1010) + 1;
                
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                    const data = await response.json();

                    // checking the types selected to see if any pokemon exist with these types
                    if (data.types.length === 2) {
                        data.types.forEach(typeInfo => {
                            const typeName = typeInfo.type.name;
                            
                            // Add if it's a new unique type for this session
                            if (!seenIds.has(typeName) && validTypes.length < 6) {
                                seenIds.add(typeName);
                                validTypes.push({
                                    id: typeName,
                                    display: typeName.charAt(0).toUpperCase() + typeName.slice(1)
                                });
                            }
                        });
                    }
                } catch (error) {
                    console.error("Error fetching anchor Pokemon:", error);
                }
            }
            setCriteria(validTypes);
        }

        generateValidGrid();
    }, []);

    // loading state
    if (!criteria) {
        return <div className="loading">Generating valid Pokemon grid...</div>;
    }

    //table render logic
    const renderRow = (rowNum) => {
        const startIndex = rowNum * 3; 
        const rowCriteriaId = rowNum + 4; 

        return (
            <tr key={rowNum} className="guessRow">
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