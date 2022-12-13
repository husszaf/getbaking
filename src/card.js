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
      {/* Card 2*/}
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
      {/* Card 3*/}
      <Card style={{ width: '18rem', display: 'inline-block'}}>
        <Card.Body>
          <Card.Title>Bakewell tart</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
          Who doesn’t love a bakewell tart packed with raspberries and almonds?
          Serve the classic English dessert with a dollop of cream or warm custard
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      {/* Card 4*/}
      <Card style={{ width: '18rem', display: 'inline-block'}}>
        <Card.Body>
          <Card.Title>Belgian buns</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Difficulty: Easy</Card.Subtitle>
          <Card.Text>
          Indulge in these moreish Belgian buns as an afternoon treat with a cup of tea.
          They're filled with lemon curd and topped with icing and a glacé cherry.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
      
  );
}

export default RecipeCard;