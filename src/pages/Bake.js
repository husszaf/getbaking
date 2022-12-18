import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeTable from "../components/createrecipe";
function Bake(){
  return(
    <div>
        <h1>Bake your recipe</h1>
        <RecipeTable />
    </div>
  );
}

export default Bake;