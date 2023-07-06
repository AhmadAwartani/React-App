import axios from "axios";
import Rating from "./Rating";
import React, { useState } from "react";

function DrinkShow({ drink }) {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(false);


  const handleQuantity = async (id) => {
    await axios.patch(`http://localhost:3005/drinks/${id}`, {
      quantity: count,

     });
  };

  const handleCart = async (id) => {
    await axios.patch(`http://localhost:3005/drinks/${id}`, {
      cart: true,
     });
  };

  

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="drink-show">
      <div className="w-80 h-80 flex ">
        <img
          className="w-1/2 h-3/4 flex justify-center ml-6 mt-6 "
          src={drink.url}
          alt="Random"
        />
      </div>

      <p className="p m-1">Title: {drink.title}</p>
      <div className="rating m-1">
        Rating: <Rating rating={drink.rating} />
      </div>
      <div className="price m-1">Price: ${drink.price}</div>

      <div className=" flex justify-center mt-5 ">
        <button
          onClick={decrementCount}
          className="text-white bg-gray-400 rounded-lg w-1/4"
        >
          -
        </button>

        <div className="mx-2 border text-center w-1/4 rounded-lg bg-white">
          {count}
        </div>

        <button
          onClick={incrementCount}
          className=" text-white bg-gray-400 rounded-lg w-1/4"
        >
          +
        </button>
      </div>
      <div>
        <a
          href="cart"
          className="bg-blue-600 flex flex-start py-1 px-5 text-white text-center rounded-md my-6 justify-center "
          onClick={ ()=> {handleQuantity(drink.id); handleCart(drink.id) }}
        >
          Add To Cart
        </a>
      </div>
    </div>
  );
}

export default DrinkShow;
