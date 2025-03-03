import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-col-reverse gap-5 lg:flex-row min-w-72   ">
      <div className="lg:w-1/2">
        <img
          src="./aboutus2.jpg"
          alt="About Us"
          width={1000}
          className="rounded-lg hover:opacity-75"
        />
      </div>
      <div className="flex flex-col items-start lg:w-1/2 text-justify lg:pl-8 ">
        <div className="text-5xl font-semibold text-gray-900 tracking-tighter pb-6">
          About Us
        </div>
        <div className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          cum iste velit architecto repudiandae voluptas quae assumenda
          necessitatibus. Beatae dolor repellendus ipsam ipsa ipsum cumque
          quibusdam quaerat labore, eius excepturi voluptatum doloribus
          consequatur quisquam ut fugiat animi velit! Natus autem quo eligendi.
          Praesentium a voluptates reprehenderit nam commodi, facere inventore.
          Welcome to our store! We offer high-quality products designed with
          love and care. Our goal is to provide customers with the best shopping
          experience by offering premium-quality products at fair prices.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          cum iste velit architecto repudiandae voluptas quae assumenda
          necessitatibus. Beatae dolor repellendus ipsam ipsa ipsum cumque
          quibusdam quaerat labore, eius excepturi voluptatum doloribus
          consequatur quisquam ut fugiat animi velit! Natus autem quo eligendi.
          Praesentium a voluptates reprehenderit nam commodi, facere inventore.
        </div>
      </div>
    </div>
  );
};

export default About;
