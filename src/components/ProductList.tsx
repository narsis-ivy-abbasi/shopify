import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "./BasketContext";

const ProductList:React.FC= () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
