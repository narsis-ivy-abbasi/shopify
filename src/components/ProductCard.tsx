import React from "react";
import { Product } from "./BasketContext";
import { Link } from "react-router-dom";
import AddToBasket from "./AddToBasket";
import Card from "./Card";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col m-2 border border-gray-200 rounded-lg p-2 hover:border-gray-400 shadow-sm transition duration-200 transform hover:-translate-y-1">
      <Card key={product.id} product={product} />

      <AddToBasket product={product} />
    </div>
  );
};

export default ProductCard;
