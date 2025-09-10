import React from "react";
import fetchData from "./pokeApi";
import types from './criteria/criteria.json'
import Table from "./table";

/* criteria checking function, we need to pinpoint what criteria is actually being displayed
and then have that pull the id from criteria.json. From there, we need to check if the pokemon
entered has the same type the pokeapi reference. If it does, we highlight the cell green, if
not, red, and replace the image with a pokemon egg if possible. */
/*function criteriaSelector(types, pokeTypes){
    const criteriaCheck = 
    if (types.id ===)

}*/