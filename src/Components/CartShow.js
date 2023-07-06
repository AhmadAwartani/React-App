import React, { useState } from 'react';
import axios from 'axios';

export default function CartShow({ drink, onRemove }) {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = async (id) => {
    try {
      await axios.patch(`http://localhost:3005/drinks/${id}`, {
        cart: true,
      });

      setIsRemoved(true);
      // Call the onRemove function to remove the item from the cart
      onRemove(drink.id);
    } catch (error) {
      console.log(error);
    }
  };

  if (isRemoved) {
    return null;
  }

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={drink.url} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <p className="font-bold text-sm">{drink.title}</p>
          <a onClick={() => handleRemove(drink.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer">
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <label className=" text-center w-8">{drink.quantity}</label>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${drink.price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${drink.price * drink.quantity}</span>
    </div>
  );
}
