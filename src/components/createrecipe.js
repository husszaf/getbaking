import React, { useState } from "react";
import "../createrecipe.css";
import Data from "../recipes.json";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
function RecipeTable() {
  return (
    <div className="d-flex">
      {Data.map((recipe) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "12rem" }}
                variant="top"
                src={recipe.images}
              />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Ingredients: {recipe.ingredients[0].ingredient}
                </ListGroup.Item>
                <ListGroup.Item>
                  weight:{" "}
                  {recipe.ingredients[0]["measurement-weight"] +
                    recipe.ingredients[0]["measurement-type"]}
                </ListGroup.Item>
                <ListGroup.Item>{recipe.ingredients[0].note}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href="../components/recipe-one.js">
                  View recipe
                </Button>
                <Button variant="primary">Modify recipe</Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default RecipeTable;
