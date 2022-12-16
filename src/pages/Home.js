import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from "../components/carousel";
import Card from "../components/card";
function Home(){
  return(
    <div>
      <Carousel />
      <Card />
    </div>
  );
}

export default Home;