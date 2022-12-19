import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import RecipeCard from "./components/card";
import AutoSlideCarousel from "./components/carousel";
import Recipes from "./pages/Recipes";
import Bake from "./pages/Bake";
import "./style.css";
import "./containersection.css";
import "./carousel.css";
import "./card.css";
import { Route } from "react-router-dom";
import Footer from "./components/footer";
import Welcome from "./components/welcome";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <div class="App">
      <Navbar />
      <Route exact path="/" component={AutoSlideCarousel} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/" component={RecipeCard} />
      <Route exact path="/recipes" component={Recipes} />
      <Route exact path="/Bake" component={Bake} />
      <Route exact path="/pages/RecipeDetails/:recipeId" component={RecipeDetails} />
      <Footer />
    </div>
  );
};

export default App;
