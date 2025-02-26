import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../components/BasketContext";

import { ChevronLeft } from "lucide-react";
import AddToBasket from "../components/AddToBasket";
import Basket from "../components/Basket";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [foundProduct, setFoundProduct] = useState<Product | null>(null);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateDescription = (description: string): string => {
    const words = description.split(" ");
    if (words.length > 40) {
      return words.slice(0, 40).join(" ") + "...";
    }
    return description;
  };
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const foundProduct =
          data.find((pro) => pro.id === Number(productId)) || null;
        setFoundProduct(foundProduct);
      });
  }, [productId]);
  return (
    <div className="flex ">
      <div className="w-3/4">
        <div className="flex justify-evenly items-center ">
          <div className="max-w-72">
            <img
              src={foundProduct?.image}
              alt={foundProduct?.title}
              width="100%"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start p-5 w-96">
            <div className="font-bold text-2xl mb-2 text-star p-2">
              {foundProduct?.title}
            </div>
            <div className="mb-5 p-2">
              <label className="text-3xl text-gray-600">
                <sup>$</sup>
                {foundProduct?.price}
              </label>
            </div>
            <div className="text-slate-600 text-sm text-justify mb-24 p-2">
              <p>
                {foundProduct
                  ? showFullDescription
                    ? foundProduct.description
                    : truncateDescription(foundProduct.description)
                  : null}
              </p>
              {foundProduct
                ? foundProduct.description.split(" ").length > 40 && (
                    <span
                      className="cursor-pointer text-blue-400"
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                    >
                      {showFullDescription ? "<< Less" : "More >>"}
                    </span>
                  )
                : null}
            </div>

            <div className="w-full">
              <AddToBasket product={foundProduct} />
            </div>

            <div className="w-full">
              <NavLink
                to="/products"
                className="flex border items-center border-gray-300 m-2 rounded-lg p-1 justify-center gap-2 hover:border-gray-800"
              >
                <ChevronLeft size={17} />
                Back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

export default ProductDetail;
