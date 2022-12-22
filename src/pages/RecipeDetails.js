import React from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Data from "../recipes.json"; // Import the recipes data from the JSON file
import "../recipedetail.css";
import RelatedRecipe from "../components/RelatedRecipe";
import FacebookShareLink from "../components/fbShare";
import TwitterShareLink from "../components/twShare";
import "../ShareLinks.css";
import Timer from "../components/RecipeTimer";

function RecipeDetails() {
  const { recipeId } = useParams(); // Retrieve the recipe object from the list of recipes using the recipeId
  const recipe = Data.find((recipe) => recipe.uuid === recipeId);
  const steps = recipe.instructions[0].steps; // Get the steps for the recipe
  const ingredients = recipe.ingredients; //Get the ingredients for the recipe

  return (
    <Container className="justify-content-center">
      <h1 className="recipeName">{recipe.name}</h1>
      <Container>
        <div className="sharelinks">
          <FacebookShareLink />
          <TwitterShareLink />
        </div>
        <Row className="profileRow">
          <Col className="side-by-side profileCol">
            <img
              src={recipe.profileImage}
              className="rounded-circle img-thumbnail img-responsive profileImg"
              alt=""
            ></img>
            <h6 className="recipeAuthor">{recipe.author}</h6>
          </Col>
        </Row>
      </Container>
      {/* Image and description container */}
      <Container className="lead recipeDescription">
        <Row>
          <div className="side-by-side col-sm">
            <img
              src={recipe.images}
              class="img-thumbnail img-responsive"
              alt="..."
            ></img>
          </div>
          <Col>
            <p className="recipeDescription">{recipe.description}</p>
          </Col>
          <Row>
            <Col className="col-sm-auto">
              <Timer />
            </Col>
          </Row>
        </Row>
      </Container>

      {/* Ingredients and steps Container */}
      <Container>
        <Row>
          <div className="col-sm-auto">
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
          </div>
          <div className="col-sm-auto">
            <h3>Nutrition:</h3>
            <ListGroup>
              {/* Here you can add the nutrition information for the recipe using the same format as the ingredients ListGroup */}
              <ListGroup.Item className="lead">
                Serving - {recipe.nutrition[0].serving}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                kcal - {recipe.nutrition[0].kcal}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                fat - {recipe.nutrition[0].fat}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                saturates - {recipe.nutrition[0].saturates}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                carbs - {recipe.nutrition[0].carbs}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                sugars - {recipe.nutrition[0].sugars}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                fibre - {recipe.nutrition[0].fibre}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                Protein - {recipe.nutrition[0].protein}
              </ListGroup.Item>
              <ListGroup.Item className="lead">
                Salt - {recipe.nutrition[0].salt}
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-sm">
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
          </div>
        </Row>
      </Container>

      {/* Related recipes */}
      <RelatedRecipe />
    </Container>
  );
}

export default RecipeDetails;
