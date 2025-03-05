import React, { createContext, useContext, useEffect, useState } from "react";

// Define the product interface based on your JSON data
export interface Product {
  id: number;
  title: string;
  price: number;
  available: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Define the basket item interface (product + quantity)
interface BasketItem extends Product {
  quantity: number;
}

// Define the context type
interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (product: Product, quantity: number) => void;
  removeFromBasket: (product: Product) => void;
  totalQuantity: number;
  totalPrice: number;
}

// Create the context with the correct type and a default value
const BasketContext = createContext<BasketContextType>({
  basket: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

// Define the provider component
interface BasketProviderProps {
  children: React.ReactNode;
}

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  // Listen for storage events
  useEffect(() => {
    const handleStorageChange = () => {
      const storedBasket = localStorage.getItem("basket");
      if (storedBasket) {
        setBasket(JSON.parse(storedBasket));
      }
    };
    
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addToBasket = (product: Product, quantity: number) => {
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === product.id ? { ...item, quantity:item.quantity + quantity } : item
        );
      } else {
        return [...prevBasket, { ...product, quantity }];
      }
    });
  };

  const removeFromBasket = (product: Product) => {
    const newBasket = basket.filter((item) => item.id !== product.id);
    setBasket(newBasket);
  };

  const totalQuantity = basket.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = basket.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

// Custom hook to use the basket context
export const useBasket = (): BasketContextType => {
  return useContext(BasketContext);
};
