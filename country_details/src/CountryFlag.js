import { useState, useEffect } from "react";

const CountryFlag = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
          .then(res => res.json())
          .then(data => {
            setImages(data);
            console.log(data);
           // setIsLoading(false);
          })
          .catch(err => console.log(err));
      }, []);

    const filteredData = images.filter((el) => {
        //if no input the return the original
        //console.log(props.filter);
        //console.log(props.set);
        if(props.set === '' && props.filter === ''){
            console.log("d");
            return el;
        }
        else if (props.set !== '' && props.filter === '') {
            console.log("a");
            return el.name.toLowerCase().includes(props.set)
        }
        //return the item which contains the user input
        else if (props.filter !== '' && props.set === '') {
           // console.log(el.region.includes(props.filter))
console.log("b");
            return el.region.includes(props.filter)
        }else{
            console.log("c");
            return el;
        }
    })

  return (
    <div>
        <div className="grid lg:grid-cols-4 grid-rows-1 md:grid-cols-2 px-6 gap-y-20  lg:px-14 ">
     {filteredData.map((image) =>( 
     <div className="rounded-lg shadow-lg max-w-sm overflow-hidden" key={image.flag}>
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="w-full h-60" src={image.flag} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{image.name}</h5>
          <div className="text-gray-700 text-base mb-4">
            <p><strong>Population: </strong> {image.population}</p>
            <p><strong>Region: </strong> {image.region}</p>
            <p><strong>Capital:</strong> {image.capital}</p>
          </div>
        </div>
    </div>
      ))}
    </div>
    </div>
  );
};

export default CountryFlag;
