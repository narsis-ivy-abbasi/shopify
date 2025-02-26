import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tighter">
          About Us
        </h1>
        <p>
          Welcome to our store! We offer high-quality products designed with
          love and care.
        </p>
      </div>

      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tighter">
            Our Mission
          </h2>
          <p>
            Our goal is to provide customers with the best shopping experience
            by offering premium-quality products at fair prices.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tighter">
            Why Choose Us?
          </h2>
          <ul>
            <li>High-quality products</li>
            <li>Fast and secure shipping</li>
            <li>Excellent customer support</li>
            <li>100% satisfaction guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
