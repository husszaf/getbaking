import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/navbar";
import RecipeCard from "./components/card";
import AutoSlideCarousel from "./components/carousel";
import Popular from "./pages/Popular";
import Recipes from "./pages/Recipes";
import Bake from "./pages/Bake";
import "./style.css";
import "./containersection.css";
import "./carousel.css";
import "./card.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Welcome from "./components/welcome";
import RecipeDetails from "./pages/RecipeDetails";
import Seasonal from "./pages/Seasonal";
import Recent from "./pages/Recent";
import RecipeMeasurementConverter from "./pages/mesaurmentConverter";

const App = () => {
  return (
    <div class="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AutoSlideCarousel/>} />
        <Route exact path="/Popular" element={<Popular />} />
        <Route exact path="/Seasonal" element={<Seasonal />} />
        <Route exact path="/recipes" element={<Recipes />} />
        <Route exact path="/Bake" element={<Bake />} />
        <Route exact path="/Recent" element={<Recent />} />
        <Route exact path="/mesaurmentConverter" element={<RecipeMeasurementConverter/>} />
        <Route exact path="/pages/RecipeDetails/:recipeId" element={<RecipeDetails/>} />
      </Routes>
      <Routes><Route exact path="/" element={<Welcome/>} /></Routes>
      <Routes><Route exact path="/" element={<RecipeCard />} /></Routes>
      <Footer />
    </div>
  );
};

export default App;
