import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import "../createrecipe.css"
import Data from "../recipes.json"
function RecipeTable() {
  return (
    <div className="container">
               {Data.map((recipe) => {
        return (
          <>
            <h1>{recipe.author}</h1>
          </>
        );
      })}  
    </div>
  );
}

export default RecipeTable;



