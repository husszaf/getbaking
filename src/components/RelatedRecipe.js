import React from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Data from "../recipes.json";
import { Container } from "react-bootstrap";

function RelatedRecipes() {
  const { recipeId } = useParams();
  const recipe = Data.find((recipe) => recipe.uuid === recipeId);
  return (
      <div className="container related-recipes">
        <h3>Related Recipes:</h3>
        <div className="row">
        {Data.filter(
          (r) => r.name[2] === recipe.name[1] || r.name[1] === recipe.name[2]
        ).map((relatedRecipe) => {
          return (
            <>
              <Container className="related-recipe">
                
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ height: "12rem" }}
                    variant="top"
                    src={relatedRecipe.images}
                  />
                  <Card.Body>
                    <Card.Title>{relatedRecipe.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{"Diffculty: " + recipe.difficulty}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{"Prep Time: " + recipe['cook-time'].slice(2)}</Card.Subtitle>
                    <Card.Text>{relatedRecipe.description}</Card.Text>
                    <Link to={`/pages/RecipeDetails/${relatedRecipe.uuid}`}>
                      <Button variant="primary">View recipe</Button>
                    </Link>
                  </Card.Body>
                </Card>
                
              </Container>
            </>
          );
        })}
        </div>
      </div>
  );
}

export default RelatedRecipes;
