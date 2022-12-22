import React from "react";
import Timer from "../components/RecipeTimer";

function CountdownTimer() {
  return (
    <>
      <div className="container">
        <div className="col">
          <Timer />
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;
