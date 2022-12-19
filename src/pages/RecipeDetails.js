import { useParams } from "react-router-dom";
import { Accordion, ListGroup } from "react-bootstrap";
import Data from "../recipes.json"; // Import the recipes data from the JSON file
import "../recipedetail.css";

function RecipeDetails() {
  const { recipeId } = useParams(); // Retrieve the recipe object from the list of recipes using the recipeId
  const recipe = Data.find((r) => r.uuid === recipeId);
  const steps = recipe.instructions[0].steps; // Get the steps for the recipe
  const ingredients = recipe.ingredients; //Get the ingredients for the recipe

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>{recipe.author}</h3>
      <p>{recipe.description}</p>
      <h3>Instructions:</h3>
      {steps.map((step, index) => {
        return (
          <>
            <Accordion defaultActiveKey={index}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>Step {index + 1}</Accordion.Header>
                <Accordion.Body>
                  <div contentEditable={false}>{step}</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        );
      })}
      <h3>Ingredients:</h3>
      <ListGroup>
        {ingredients.map((ingredient, index) => {
          return (
            <ListGroup.Item>
              {ingredient.ingredient} - {ingredient["measurement-weight"]}{" "}
              {ingredient["measurement-type"]} {ingredient["measurement-size"]}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default RecipeDetails;
