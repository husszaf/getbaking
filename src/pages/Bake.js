import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeTable from "../components/createrecipe";
import RecipeBuilder from '../components/RecipeBuilder';
import { Container } from "react-bootstrap";

function Bake(){
  return(
    <>
      <RecipeBuilder />
    </>
  );
}

export default Bake;