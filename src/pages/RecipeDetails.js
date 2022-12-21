import React from 'react';
import { useParams } from "react-router-dom";
import { Accordion, Col, Container, ListGroup, Row } from "react-bootstrap";
import Data from "../recipes.json"; // Import the recipes data from the JSON file
import "../recipedetail.css";
import RecipeBuilder from '../components/RecipeBuilder';
import RelatedRecipe from '../components/RelatedRecipe';

function RecipeDetails() {
  const { recipeId } = useParams(); // Retrieve the recipe object from the list of recipes using the recipeId
  const recipe = Data.find((recipe) => recipe.uuid === recipeId);
  const steps = recipe.instructions[0].steps; // Get the steps for the recipe
  const ingredients = recipe.ingredients; //Get the ingredients for the recipe

  return (
    <Container className="container-2">
      <h1 className="recipeName">{recipe.name}</h1>
      <Container>
        <Row className="profileRow">
          <Col className="side-by-side profileCol">
          <img src={recipe.profileImage} className="rounded-circle img-thumbnail img-responsive profileImg" alt=""></img>          
          <h6 className="recipeAuthor">{recipe.author}</h6>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      {/* Image and description container */}
      <Container className="lead recipeDescription">
        <Row>
          <Col className="side-by-side">
            <img
              src={recipe.images}
              class="img-thumbnail img-responsive"
              alt="..."
            ></img>
          </Col>
          <Col>
            <p className="recipeDescription">{recipe.description}</p>
          </Col>
        </Row>
      </Container>
      {/* Ingredients and steps Container */}
      <Container>
        <Row>
          <Col>
            <h3>Ingredients:</h3>
            <ListGroup>
              {ingredients.map((ingredient) => {
                return (
                  <ListGroup.Item className="lead">
                    {ingredient.ingredient} - {ingredient["measurement-weight"]}{" "}
                    {ingredient["measurement-type"]}{" "}
                    {ingredient["measurement-size"]}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col>
            <h3>Instructions:</h3>
            {steps.map((step, index) => {
              return (
                <Accordion defaultActiveKey={index} size="sm">
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header className="text-capitalize">
                      Step {index + 1}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div contentEditable={false}>{step}</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </Col>
        </Row>
      </Container>

      {/* Related recipes */}
      <RelatedRecipe />
    </Container>
  );
}

export default RecipeDetails;
