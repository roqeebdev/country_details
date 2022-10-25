import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountryFlag = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        // setIsLoading(false);
       
      })
      .catch((err) => console.log(err));
  }, []);


  const filteredData = images.filter((el) => {
    //if no input the return the original
    if (props.set === "" && props.filter === "select") {
      console.log("d");
      return el;
    } else if (props.set !== "" && props.filter === "select") {
      console.log("a");
    //console.log(props.filter);
      return el.name.toLowerCase().includes(props.set);
    }
    //return the item which contains the user input
    else if (props.filter !== "select" && props.set === "") {
      // console.log(el.region.includes(props.filter))
      console.log("b");
      //console.log(props.filter);
      return el.region.includes(props.filter);
    } else if (props.set !== "")  {
      console.log("f");
      //console.log(props.filter);
        return el.name.toLowerCase().includes(props.set);
    }else
      console.log("c");
     // console.log(props.filter);
      return el;
  });

  return (
    <div className="dark:text-white dark:bg-slate-800">
      <div className="grid lg:grid-cols-4 grid-rows-1 md:grid-cols-2 px-6 gap-y-20 gap-8  md:px-14 ">
        {filteredData.map((image) => (

            <div
              className="rounded-lg shadow-lg max-w-sm overflow-hidden"
              key={image.flag}
            >
              <Link to={`/country/${image.capital}`} data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="w-full h-60" src={image.flag} alt="" />
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
            </div>

        ))}
      </div>
    </div>
  );
};

export default CountryFlag;
