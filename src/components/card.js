import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Data from '../recipes.json';
function RecipeCard() {
  return (
    <div className='recipe'>
      <h1 className='main-text display-1'>Today's Recipes</h1>
      <div className='d-flex'>
      {Data.map((recipe) => {
        return (
          <>
            <Card style={{ width: "18rem"}}>
              <Card.Img style={{ height: "12rem"}} variant="top" src={recipe.images} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
                <Button variant="primary">View recipe</Button>
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