import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./BasketContext";

interface Card {
  product: Product;
}

const Card: React.FC<Card> = ({ product }) => {
  return (
    <div>
      <Link to={`/${product.id}`}>
        <div className="flex flex-col w-48 h-56 group ">
          <div className="self-center h-40 ">
            <img
              src={product.image}
              alt={product.title}
              width="100px"
              className="h-36 object-contain transition-transform duration-500 hover:opacity-75 group-hover:scale-110"
            />
          </div>
          <div className="font-bold h-10 overflow-hidden text-ellipsis whitespace-nowrap">
            {product.title}
          </div>
          <div className="h-10">
            <label className="font-mono">
              <sup>$</sup>
              {product.price}
            </label>
          </div>
          <div>
            <label className="font-thin"> Available:</label> {product.available}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
