import React from "react";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";

const Products: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-3/4">
        <ProductList />
      </div>
      <div className="w-1/4">
        <Basket />
      </div>
    </div>
  );
};

export default Products;
