import { useState } from "react";
import {GoSearch} from "react-icons/go"

const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState( "" );


  const handleSubmit =(event)=> {
    event.preventDefault();
   
    setSearchTerm("")
  

  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value)

    
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
       
      
    
        <div className="group transition-all duration-300 flex gap-3 items-center">
          <button className="border-0">

          <GoSearch className="transition-all duration-300 group-hover:text-orange-500" size={30}/>
          </button>
          
    <input value={ searchTerm } onChange={ handleChange } className="hidden focus:outline-none focus:shadow-md  border-[1px] font-poppins px-6 py-3 transition-all duration-300 rounded-md border-Tertiary-Black-200/50 group-hover:flex w-8 h-8 xl:group-hover:w-[200px] lg:group-hover:w-[130px]  " type="search" placeholder="Search ....."/>
      
      </div>

      </form>
    </div>

  )
}

export default Search