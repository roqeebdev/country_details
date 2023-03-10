// Importing necessary modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Defining a functional component CountryFlag with props
const CountryFlag = (props) => {
  // Initializing state variables using the useState Hook
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Using the useEffect Hook to fetch data from an API when the component mounts
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filtering the data based on the search term and region selected
  const filteredData = images.filter((el) => {
    if (props.set === "" && props.filter === "select") {
      return el;
    } else if (props.set !== "" && props.filter === "select") {
      return el.name.toLowerCase().includes(props.set);
    } else if (props.filter !== "select" && props.set === "") {
      return el.region.includes(props.filter);
    } else if (props.set !== "") {
      return el.name.toLowerCase().includes(props.set);
    } else {
      return el;
    }
  });

  // Rendering the component
  return (
    <div className="dark:text-white dark:bg-slate-800">
      {isLoading ? (
        // If the data is still being fetched, show a loading spinner
        <div className="flex justify-center items-center h-full">
          <motion.div
            className="w-24 h-24 rounded-full border-4 border-t-purple-600 animate-spin"
            style={{ borderColor: "transparent transparent #fff transparent" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          />
        </div>
      ) : (
        // Once the data is fetched, render the filtered images
        <motion.div
          className="grid lg:grid-cols-4 grid-rows-1 md:grid-cols-2 px-6 gap-y-20 gap-8 md:px-14 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredData.map((image) => (
            <motion.div
              className="rounded-lg shadow-lg max-w-sm overflow-hidden"
              key={image.flag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/country/${image.capital}`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <motion.img
                  className="w-full h-48 object-cover"
                  src={image.flag}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
              <div className="p-6">
                <h5 className="text-gray-900 dark:text-white text-xl font-medium mb-2">
                  {image.name}
                </h5>
                <div className="text-gray-700 dark:text-white text-base mb-4">
                  <p>
                    <strong>Population: </strong> {image.population}
                  </p>
                  <p>
                    <strong>Region: </strong> {image.region}
                  </p>
                  <p>
                    <strong>Capital:</strong> {image.capital}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
export default CountryFlag;