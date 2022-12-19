import React, { useState } from "react";
import "../createrecipe.css";
import Data from "../recipes.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../components/easyMincePies.css";

function EasyMincePies() {
  const [isEditMode, setIsEditMode] = useState(false); // State variable to track edit mode

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  const firstRecipe = Data.slice(0, 1); // Get the first element of the Data array
  return (
    <div className="d-flex">
      {firstRecipe.map((recipe) => { // Map over the firstRecipe array instead of Data
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={recipe.images}
              />
              <Card.Body>
                <Card.Title contentEditable={isEditMode}>{recipe.name}</Card.Title>
                <Card.Text contentEditable={isEditMode}>{recipe.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item contentEditable={isEditMode}>
                  Ingredients: {recipe.ingredients[0].ingredient}
                </ListGroup.Item>
                <ListGroup.Item contentEditable={isEditMode}>
                  weight:{" "}
                  {recipe.ingredients[0]["measurement-weight"] +
                    recipe.ingredients[0]["measurement-type"]}
                </ListGroup.Item>
                <ListGroup.Item contentEditable={isEditMode}>{recipe.ingredients[0].note}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href="../components/recipe-one.js">
                  View recipe
                </Button>
                <Button variant="primary" onClick={toggleEditMode}>Modify recipe</Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default EasyMincePies;
