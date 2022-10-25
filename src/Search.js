const Search = ({ searchText, setFilter }) => {
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    searchText(lowerCase);
  };

  return (
    <div className=" flex flex-col justify-between py-7 px-6 pb-4 md:flex-row md:px-14  md:py-6 md:pt-12">
      <div className="pb-9 lg:w-1/3 md:w-1/3 ">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-8">
            <svg className="h-5 w-5 dark:fill-white" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <input
            className="placeholder:italic dark:bg-slate-600 dark:text-white dark:placeholder:text-white  block  w-full border dark:border-slate-800 rounded-md py-4 pl-20 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for a country..."
            type="text"
            onChange={inputHandler}
          />
        </label>
      </div>
      <div className="lg:w-1/5 md:w-1/5 sm:w-1/2">
        <label className="relative block">
          <select
            className="text-xs block  w-full dark:bg-slate-600 dark:text-white rounded-md py-4 pl-4 border-slate-800 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="select">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Search;
