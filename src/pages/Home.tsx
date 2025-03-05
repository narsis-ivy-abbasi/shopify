import React, { useEffect, useRef, useState } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { Product } from "../components/BasketContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const images = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust the scroll speed as needed
      if (direction === "left") {
        scrollRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="container mx-auto  ">
      <section>
        <Carousel images={images} />
      </section>
      <section className="my-20 flex flex-col justify-center ">
        <div className="pb-2 text-5xl">Welcome to IVY Shopify</div>
      </section>
      <section className="mb-20 flex ">
        <button
          onClick={() => scroll("left")}
          className="transition-transform duration-200 hover:-translate-x-2 p-2 "
        >
          <ChevronLeft
            size={50}
            className="hover:border hover:border-gray-200 rounded-3xl  "
          />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row rounded-lg p-2 overflow-hidden "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex m-2 border border-gray-200 rounded-lg p-2 hover:border-gray-400 shadow-sm transition duration-200 transform hover:-translate-y-1"
            >
              <Card product={product} key={product.id} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="transition-transform duration-200 hover:translate-x-2 p-2"
        >
          <ChevronRight
            size={50}
            className="hover:border hover:border-gray-200 rounded-3xl"
          />
        </button>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2  mb-5 md:mb-0">
          <img src="./howTo.jpg" alt="Shopping" className="rounded-lg" />
        </div>
        <div className="flex flex-col items-start md:w-1/2 text-left md:pl-8 ">
          <label className="text-2xl font-bold pb-2 md:pb-8">How to ...</label>
          <div className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nobis nemo praesentium? Debitis impedit quasi incidunt, quos,
            tenetur est, facilis dolorum porro assumenda sapiente magni
            eligendi. Quam unde, aliquid iure explicabo impedit maxime deserunt,
            ullam ad ab accusamus nobis praesentium!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
