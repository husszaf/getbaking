import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../recipes.css';
import Figure from 'react-bootstrap/Figure';
import data from "../recipes.json"

function Recipes(){
  const [recipees, setRecipees] = useState(data); 
  return(
    <div>
      <h1>Hello Recipe</h1>
      <div className="sec1 container">
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        twest
      </Figure.Caption>
    </Figure>
      </div>
    </div>
  );
}

export default Recipes;

