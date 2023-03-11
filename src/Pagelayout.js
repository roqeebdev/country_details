import { useState } from "react";
import CountryFlag from "./CountryFlag";

import Search from "./Search";



const PageLayout = () => {
//   const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filterParam, setFilterParam] = useState(['']);


    return (         
        <div className=" transition-all">
            <Search searchText = {setSearch} setFilter = {setFilterParam}/>
            <CountryFlag set = {search} filter= {filterParam} />
        </div>
             );
}
 
export default PageLayout;