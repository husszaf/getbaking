import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../PopularRecipeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Data from '../recipes.json';

function RecentRecipeCard() {
  const [recipes, setRecipes] = useState(Data);  // Initialize state with Data
  const sortedRecipes = recipes.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  });
  return (
    <div className="container recipe">
      <h1 className="main-text display-1">Recent Recipes</h1>
      <div className="row">
        {sortedRecipes.map(recipe => {

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
                  <Card.Subtitle className="mb-2 text-muted">{"Date: " + recipe.created.slice(0,10)}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{"By: " + recipe.author}</Card.Subtitle>
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

export default RecentRecipeCard;
