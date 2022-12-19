import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../recipes.css';
import data from "../recipes.json"
import RecipeOne from '../components/recipe-one';
import EasyMincePies from '../components/easyMincePies';

function Recipes(){
  const [recipees, setRecipees] = useState(data); 
  return(
    <div>
      <h1>Hello Recipe</h1>
      <EasyMincePies />
      <RecipeOne />
    </div>
  );
}

export default Recipes;

