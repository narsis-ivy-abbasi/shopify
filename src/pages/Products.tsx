import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import { Product } from "../components/BasketContext";
import Filter from "../components/Filter";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilterChange = (filters: { name: string; sortBy: string }) => {
    const { name, sortBy } = filters;

    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(name.toLowerCase())
    );

    // Sorting Logic
    if (sortBy === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-3/4">
        <Filter onFilterChange={handleFilterChange} />
        <ProductList products={filteredProducts} />
      </div>
      <div className="lg:w-1/4 flex justify-center lg:justify-start">
        <Basket />
      </div>
    </div>
  );
};

export default Products;
