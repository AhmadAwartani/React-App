import { useEffect, useState } from "react";
import DrinksShow from "../Components/DrinksShow";
import Cart from "./Cart.js";
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
    return <DrinksShow key={drink.id} drink={drink} />;
  });

  return <div className="drink-list">{renderedDrinks}</div>;
}

export default DrinksList;
