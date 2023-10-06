// import { useState } from "react";
// import {GoSearch} from "react-icons/go"
// import MealItem from "../Pages/MealItem"
// const Search = () => {
//   const [ searchTerm, setSearchTerm ] = useState( "" );


//   const handleSubmit =(event)=> {
//     event.preventDefault();
   
//     setSearchTerm("")
  

//   }
//   const handleChange = (event) => {
//     setSearchTerm(event.target.value)

    
//   }
//   const[search,setSearch]=useState("");
//   const[Mymeal,setMeal]=useState();
//   const searchMeal=(evt)=>{
//       if(evt.key=="Enter")
//       {
//           fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
//       }
//   return (
//     <div className="">
//       {/* <form onSubmit={handleSubmit}> */}
//         {/* <div className="group transition-all duration-300 flex gap-3 items-center">
//           <button className="border-0">

//           <GoSearch className="transition-all duration-300 group-hover:text-orange-500" size={30}/>
//           </button>
//            */}
//     <input value={ searchTerm } onChange={ handleChange } className="hidden focus:outline-none focus:shadow-md  border-[1px] font-poppins px-6 py-3 transition-all duration-300 rounded-md border-Tertiary-Black-200/50 group-hover:flex w-8 h-8 xl:group-hover:w-[200px] lg:group-hover:w-[130px]  " type="search" placeholder="Search ....."/>
//     <div className="container">
//                    {   
                  
//                     (Mymeal==null)? <p className="notSearch">Not found</p> : 
//                          Mymeal.map((res)=>{
//                              return(
//                             <MealItem data={res}/>)} 
                     
//                     ) 
                   
//                    }

//                 </div>
//       </div>

//       // </form>
//     // </div>

//   )
//                   }
// }

// export default Search
// ==============================





// import React from "react";
// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
// function SearchBar(){

//     const [isLoading, setIsLoading] = useState(false);
//     const [query, setQuery] = useState("");
//     const [recipes, setRecipes] = useState([]);
//     const searchRecipes = async () => {
//         setIsLoading(true);
//         const url = searchApi + query
//         const res = await fetch(url);
//         const data = await res.json();
//         setRecipes(data.meals);
//         setIsLoading(false);
//       };
    
//       useEffect(() => {
//         searchRecipes()
//       }, []);
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         searchRecipes();
//       }
    
// const Search = ({
//     handleSubmit,
//     query,
//     isLoading,
//     setQuery
// }) => {
//     return (
        
//              <div className="container">
//       <h2>Our Food Recipes</h2>
//       <SearchBar
//         isLoading={isLoading}
//         query={query}
//         setQuery={setQuery}
//         handleSubmit={handleSubmit}
//       />
//       <div className="recipes">
        
//         {recipes ? recipes.map(recipe => (
//           <RecipeCard
//              key={recipe.idMeal}
//              recipe={recipe}
//           />
//         )) : "No Results."}
//       </div>
//       <form onSubmit={handleSubmit} >
//             <input 
                
//                 value={query}
//                 className="right-0 top-2 px-[90px] absolute"
//                 placeholder="Search Recipe"
//                 name="query"
//                 disabled={isLoading}
//                 onChange={(event) => setQuery(event.target.value)}
//             />   
//             <input
                
//                 disabled={isLoading || !query}
//                 type="submit"
//                 className="right-0 px-10 top-2 absolute"
//                 value="Search"
//             />
//               </form>
//     </div>
      
//     )
// }
// };

// export default SearchBar;