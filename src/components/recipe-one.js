import React from 'react';
import Data from "../recipes.json";
import Accordion from "react-bootstrap/Accordion";

function RecipeOne() {
  const firstRecipe = Data[0]; // Get the first recipe in the array
  const steps = firstRecipe.instructions[0].steps; // Get the steps for the first recipe

  return (
    <div className="recipe">
      {steps.map((step, index) => {
        return (
          <>
            <Accordion defaultActiveKey={index}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>Step {index + 1}</Accordion.Header>
                <Accordion.Body>
                  <div contentEditable={true}>
                    {step}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        );
      })}
      <button onClick={() => window.print()}>Save as PDF</button>
    </div>
  );
}

export default RecipeOne;
