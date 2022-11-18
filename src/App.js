import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import Carousel from "./carousel";
import Card from "./card";
import "./style.css";
import "./carousel.css";
import "./card.css";
const App = () => {
  

  return (
    <div class="homepage">
      <Navbar />
      <Carousel />
      <Card /> 
    </div>
  );
}

export default App;
