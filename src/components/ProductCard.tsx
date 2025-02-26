import React, { useState } from "react";
import { useBasket } from "./BasketContext";
import { Product } from "./BasketContext";
import { Link } from "react-router-dom";
import AddToBasket from "./AddToBasket";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col m-2 border border-gray-200 rounded-lg p-2 hover:border-gray-400 shadow-sm transition duration-200 transform hover:-translate-y-1">
      <Link to={`/${product.id}`}>
        <div className="flex flex-col w-48 h-56">
          <div className="self-center h-40 ">
            <img
              src={product.image}
              alt={product.title}
              width="100px"
              className=" h-36 object-contain"
            />
          </div>
          <div className="font-bold h-10 overflow-hidden text-ellipsis whitespace-nowrap">
            {product.title}
          </div>
          <div className="h-10">
            <label className="font-mono  ">
              <sup>$</sup>
              {product.price}
            </label>
          </div>
          <div>
            <label className="font-thin"> Available:</label> {product.available}
          </div>
        </div>
      </Link>
      <AddToBasket product={product} />
    </div>
  );
};

export default ProductCard;
