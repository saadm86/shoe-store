import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./shoes.json";

export const ProductItem = () => {
  const { id } = useParams();
  const shoe = Shoes[id];
  if (!shoe) return <h1>Product Not Found!</h1>;

  return (
    <div className="link">
      <h3>{shoe.name}</h3>
      <br />
      <img src={shoe.img} height={400} alt="" />
    </div>
  );
};
