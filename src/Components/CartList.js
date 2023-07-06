import { useEffect, useState } from "react";
import CartShow from "./CartShow.js";
import axios from "axios";

function DrinksList() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/drinks');
        setDrinks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(drinks);

  const renderedDrinks = drinks.map((drink) => {
    if(drink.cart){    return <CartShow key={drink.id} drink={drink} />;
  }
  });

  return <div>{renderedDrinks}</div>;
}

export default DrinksList;
