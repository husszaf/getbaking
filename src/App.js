import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import "./style.css";
import "./containersection.css";
import "./carousel.css";
import "./card.css";
import { Route, Link } from "react-router-dom";
import Recipes from "./pages/Recipes";
const App = () => {
  

  return (
    <div class="App">
      <Navbar />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/Home" component={Home} />
    </div>
  );
}

export default App;