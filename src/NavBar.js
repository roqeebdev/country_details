import Toggle from './toogle';



const NavBar = () => {
    
    return ( 
        
        <div className="flex justify-between items-center px-6 py-8 drop-shadow bg-white dark:bg-slate-800 md:px-14 md:py-6">
            <div className="">
                <p className="text-md font-bold ">
                    Where in the world?
                </p>
            </div>
            <div className="text-sm font-medium">
                <Toggle/>
            </div>
        </div>
     );
}
 
export default NavBar;