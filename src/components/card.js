import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Data from '../recipes.json';

function RecipeCard() {
  const [recipes, setRecipes] = useState(Data);  // Initialize state with Data

  return (
    <div className="container recipe">
      <h1 className="main-text display-1">Today's Recipes</h1>
      <div className="d-flex">
        {recipes.map(recipe => {
          return (
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  style={{ height: '12rem' }}
                  variant="top"
                  src={recipe.images}
                />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{"Diffculty: " + recipe.difficulty}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{"Prep Time: " + recipe['cook-time'].slice(2)}</Card.Subtitle>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Link to={`/pages/RecipeDetails/${recipe.uuid}`}>
                    <Button variant="primary">View recipe</Button>
                  </Link>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default RecipeCard;
