import Card from 'react-bootstrap/Card';

function RecipeCard() {
  return (
    <div>
      <h1 className='main-text display-1'>Today's Recipes</h1>
      {/* Card 1*/}
      <Card style={{ width: '18rem' , display: 'inline-block'}}>
        <Card.Body>
          <Card.Title>Banana bread</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
          A cross between banana bread and a drizzle cake,
          this easy banana loaf recipe is a quick bake that can be frozen.
          It's great for using up overripe bananas, too.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', display: 'inline-block'}}>
        <Card.Body>
          <Card.Title>Vintage chocolate chip cookies</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Difficulty: easy</Card.Subtitle>
          <Card.Text>
          An easy chocolate chip cookie recipe for soft biscuits with
          a squidgy middle that will impress family and friends.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', display: 'inline-block'}}>
        <Card.Body>
          <Card.Title>Bakewell tart</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', display: 'inline-block'}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
      
  );
}

export default RecipeCard;