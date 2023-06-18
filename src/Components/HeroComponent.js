import React from "react";

function HeroComponent({ heroName }) {
  if (heroName === "Jocker") {
    throw new Error("Not a here");
  }
  return <div>Hero Name is : {heroName}</div>;
}

export default HeroComponent;
