import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import RecipeMeasurementConverter from "../components/converter";
import "../RecipeBuilder.css";

function RecipeDetails() {
  const { recipeId } = useParams(); // Retrieve the recipe object from the list of recipes using the recipeId

  // Initialize the state variables for the recipe details
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [images, setImages] = useState("");

  // Handle changes to the form fields
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value.split(","));
  };
  const handleStepsChange = (event) => {
    setSteps(event.target.value.split(","));
  };
  const handleImagesChange = (event) => {
    setImages(event.target.value);
  };

  // Add, edit, and remove ingredients
  const handleAddIngredient = (event) => {
    event.preventDefault();
    setIngredients([...ingredients, ""]);
  };
  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };
  const handleRemoveIngredient = (event, index) => {
    event.preventDefault();
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  // Add, edit, and remove steps
  const handleAddStep = (event) => {
    event.preventDefault();
    setSteps([...steps, ""]);
  };
  const handleStepChange = (event, index) => {
    const newSteps = [...steps];
    newSteps[index] = event.target.value;
    setSteps(newSteps);
  };
  const handleRemoveStep = (event, index) => {
    event.preventDefault();
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  return (
    <>
      <Container>
        <Row>
          <div className="col-sm">
            {/* Form for entering the recipe details */}
            <Form className="recipeForm">
              <Form.Group className="mb-3" controlId="formRecipeName">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter recipe name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRecipeAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author name"
                  value={author}
                  onChange={handleAuthorChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRecipeDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRecipeIngredients">
                <Form.Label>Ingredients</Form.Label>
                {ingredients.map((ingredient, index) => (
                  <>
                    <div key={index}>
                      <Form.Control
                        type="text"
                        placeholder="Enter ingredient"
                        value={ingredient}
                        onChange={(event) =>
                          handleIngredientChange(event, index)
                        }
                      />
                    </div>
                    <Button
                      variant="danger"
                      onClick={(event) => handleRemoveIngredient(event, index)}
                      className="btn-remove-ingredient"
                    >
                      Remove
                    </Button>
                  </>
                ))}

                <Button className="btn-add-ingredient" variant="primary" onClick={handleAddIngredient}>
                  Add Ingredient
                </Button>
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRecipeSteps">
                <Form.Label>Steps</Form.Label>
                {steps.map((step, index) => (
                  <>
                    <div key={index}>
                      <Form.Control
                        type="text"
                        placeholder="Enter step"
                        value={step}
                        onChange={(event) => handleStepChange(event, index)}
                      />
                    </div>
                    <Button
                    className="btn-remove-step"
                      variant="danger"
                      onClick={(event) => handleRemoveStep(event, index)}
                    >
                      Remove
                    </Button>
                  </>
                ))}
                <Button className="btn-add-step" variant="primary" onClick={handleAddStep}>
                  Add Step
                </Button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRecipeImages">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  value={images}
                  onChange={handleImagesChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => window.print()}
              >
                Save as PDF
              </Button>
            </Form>
            <RecipeMeasurementConverter />
          </div>
        </Row>
      </Container>

      {/* Display the recipe details */}
      <Container>
      <h1 className="recipeName">{name}</h1>
        <Row className="profileRow">
          <Col className="side-by-side profileCol">
            <img
              src={images}
              className="rounded-circle img-thumbnail img-responsive profileImg"
              alt=""
            ></img>
            <h6 className="recipeAuthor">{author}</h6>
          </Col>
        </Row>
      </Container>
      {/* Image and description container */}
      <Container className="lead recipeDescription">
        <Row>
          <div className="side-by-side col-sm">
            <img
              src={images}
              class="img-thumbnail img-responsive"
              alt="..."
            ></img>
          </div>
          <Col>
            <p className="recipeDescription">{description}</p>
          </Col>
        </Row>
      </Container>
      {/* Ingredients and steps Container */}
      <Container>
        <Row>
          <div className="col-sm-auto">
            <h3>Ingredients:</h3>
            <ListGroup>
              {ingredients.map((ingredient, index) => {
                return (
                  <ListGroup.Item key={index} className="lead">
                    {ingredient}
                  </ListGroup.Item>
                );
              })}
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
    </>
  );
}

export default RecipeDetails;
