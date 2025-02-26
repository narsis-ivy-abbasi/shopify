import React, { useState } from "react";
import { useBasket } from "./BasketContext";
import { Product } from "./BasketContext";

interface AddToBasketProps{
    product:Product | null;
}

const AddToBasket :React.FC<AddToBasketProps> = ({product}) => {
  const [quantity, setQuantity] = useState(0);
  const { addToBasket } = useBasket(); 
  const [isHovered, setIsHovered] = useState(false);

  const handleInc = () => { 
    if (product && quantity < product.available) {
      setQuantity(quantity + 1);
    }
  };

  const handleDec = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <button
          className="border border-gray-400 hover:border-gray-600  px-4 rounded-lg m-2 py-1"
          onClick={handleDec}
          disabled={!product}// Disable if product is null
        >
          -
        </button>
        {quantity}
        <button
          className="border border-gray-400 hover:border-gray-600  px-4 rounded-lg m-2 py-1"
          onClick={handleInc}
          disabled={!product} // Disable if product is null
        >
          +
        </button>
      </div>
      <button
        className={`border border-gray-400 hover:border-gray-600 px-4 rounded-lg m-2 py-1 ${
          quantity > 0
            ? "bg-white"
            : "bg-slate-100 text-gray-500 cursor-not-allowed"
        } `}
        disabled={!product || quantity <= 0}
        onClick={() => {
            if(product)
         { addToBasket(product, quantity);
          setQuantity(0);}
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "🛒" : "Add to Basket"}
      </button>
    </div>
  );
};

export default AddToBasket;
