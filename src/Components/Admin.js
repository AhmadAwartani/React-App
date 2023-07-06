import { useEffect, useState } from "react";
import Logo from "../svg/logo3.jpg";
import axios from "axios";

export default function Admin() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get("http://localhost:3005/drinks");
        setDrinks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDrinks();
  }, []);

  const deleteDrinkById = async (id) => {
    await axios.delete(`http://localhost:3005/drinks/${id}`);
    const updatedDrinks = drinks.filter((drink) => {
      return drink.id !== id;
    });

    setDrinks(updatedDrinks);
  };

  const rednderedDrinks = drinks.map((drink) => {
    return (
      <tr className="border-b bg-gray-100">
        <th className="text-sm font-medium px-6 py-4 whitespace-nowrap text-left"></th>

            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
              {drink.title}
            </td>
            <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left text-gray-500">
              {drink.price}
            </td>

        <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-right">
          <button
            className="delete-button "
            onClick={() => deleteDrinkById(drink.id)}
          >
            Delete
          </button>{" "}
        </td>
      </tr>
    );
  });

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="/" className="flex items-center pl-2.5 mb-5">
            <img src={Logo} className="h-6 mr-3 sm:h-7" />
            <a
              href="/"
              className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              Dimitri's
            </a>
          </a>
          <ul className="space-y-2 font-medium ">
            <li>
              <a
                href="adminusers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="login"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="container my-12 py-12 mx-auto px-4 md:px-6 md:px-12">
        <section className="mb-20 text-gray-800">
          <div className="block bg-white">
            <div className="flex flex-col">
              <div className="inline-block min-w-full sm:px-6 lg:px-20">
                <table className="min-w-full mb-0">
                  <thead className="border-b rounded-t-lg text-left">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium px-6 py-4"
                      ></th>
                      <th scope="col" className="text-sm font-medium px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4">
                        Price
                      </th>
                      <th
                        scope="col"
                        className="rounded-tr-lg text-sm font-medium px-6 py-4"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>{rednderedDrinks}</tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
