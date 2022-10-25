import { useState } from "react";
import CountryFlag from "./CountryFlag";

import Search from "./Search";



const Pagelayout = () => {
//   const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filterParam, setFilterParam] = useState(['']);


    return ( 
        <div>
        
        <div className=" transition-all">
            
            <Search searchText = {setSearch} setFilter = {setFilterParam}/>
            <CountryFlag set = {search} filter= {filterParam} />

        </div>

        </div>
             );
}
 
export default Pagelayout;