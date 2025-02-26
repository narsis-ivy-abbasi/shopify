import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 text-white rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-2">Welcome To Our Store</h1>
          <p className="text-lg">
            Discover amazing products that fit your style.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded mt-4 hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div>list of products</div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="flex justify-around">
          <a href="" className="text-blue-500 hover:text-blue-700">
            Men's Clothing
          </a>
          <a href="" className="text-blue-500 hover:text-blue-700">
            Jewelry
          </a>
          <a href="" className="text-blue-500 hover:text-blue-700">
            Electronics
          </a>
          <a href="" className="text-blue-500 hover:text-blue-700">
            Women's Clothing
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">All Products</h2>
        <div>Show All products</div>
      </section>
    </div>
  );
};

export default Home;
