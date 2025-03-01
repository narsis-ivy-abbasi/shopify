import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { Product } from "../components/BasketContext";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const images = [
    "./7.jpg",
    "./8.jpeg",
    "./9.jpg",
    "./10.jpg",
    "./11.jpg",
    "./12.jpg",
    "./13.jpg",
    // "./1.png",
    // "./2.png",
    // "./3.png",
    // "./4.png",
    // "./5.png",
    // "./6.png",
  ];
  return (
    <div className="container mx-auto  ">
      <section>
        <Carousel images={images} />
      </section>
      <section className="my-20 flex flex-col justify-center ">
        <div className="pb-2 text-5xl">Welcome to IVY Shopify</div>
        <div className="font-semibold text-emerald-800">
          Explore Our Latest Collections
        </div>
      </section>
      <section className="mb-20">
        <div className="text-2xl font-semibold mb-4">
          Discover amazing products that fit your style.
        </div>
        <div className="flex flex-row border border-gray-400 rounded-lg p-2 shadow-sm ">
          {products.map((product) => (
            <div className="flex m-2 border border-gray-200 rounded-lg p-2 hover:border-gray-400 shadow-sm transition duration-200 transform hover:-translate-y-1">
              <Card key={product.id} product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
