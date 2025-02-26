import React from "react";
import { useBasket } from "./BasketContext";
import { Trash2 } from "lucide-react";

const Basket: React.FC = () => {
  const { totalQuantity, totalPrice, basket, removeFromBasket } = useBasket();

  return (
    <div className="border-2 fixed bg-white shadow-md m-2 rounded-md hover:border-gray-800">
      <div className="text-gray-950"> 🛒 Basket</div>
      <div className="flex flex-col w-72">
        <div className=" text-left font-light">
          {basket.length > 0 ? (
            <table className="text-gray-500 text-sm w-full py-1 px-2 border-separate ">
              <thead className="bg-slate-800 text-white text-xs ">
                <tr>
                  <th className="pl-1">Name</th>
                  <th className="pl-1">Price</th>
                  <th className="text-center">Qty</th>
                  <th className="flex justify-center">
                    <Trash2 size="15" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 text-xs odd:bg-gray-100 even:bg-white"
                  >
                    <td className="pl-1"> {item.title}</td>
                    <td className="pl-1"> ${item.price.toFixed(2)}</td>
                    <td className="text-center "> {item.quantity}</td>
                    <td className="text-center">
                      <button
                        className="remove-btn "
                        onClick={() => removeFromBasket(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-2">Your basket is empty.</div>
          )}
        </div>

        <div className="flex flex-col items-start p-2">
          <div className="flex flex-row w-full ">
            <div className="pr-2">Total Items: </div>
            <div> {totalQuantity}</div>
          </div>
          <div className="flex flex-row w-full">
            <div className="pr-2">Total Price: </div>
            <div>
              <sup>$</sup>
              {totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
