import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Bake from "./pages/Bake";
import "./style.css";
import "./containersection.css";
import "./carousel.css";
import "./card.css";
import { Route } from "react-router-dom";
const App = () => {
  

  return (
    <div class="App">
      <Navbar />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Bake" component={Bake} />
    </div>
  );
}

export default App;