import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeCard from "./components/card";
import AutoSlideCarousel from "./components/carousel";
import "./style.css";
import "./containersection.css";
import "./carousel.css";
import "./card.css";
import Welcome from "./components/welcome";

function Getbaking(){
    return(
        <>
        <AutoSlideCarousel/>
        <Welcome />
        <RecipeCard />
        </>
    );
}

export default Getbaking;