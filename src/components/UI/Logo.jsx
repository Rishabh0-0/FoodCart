import React from "react";
import FoodIcon from "./../../assets/logo/FoodIcon.png";

const Logo = () => (
  <a href="/" className="flex items-center text-2xl font-bold text-white">
    <img src={FoodIcon} className="w-8 h-8" />
    GrubCart
  </a>
);

export default Logo;
