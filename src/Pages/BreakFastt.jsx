import React  , { useState, useEffect } from "react";
import Search from "../Components/Search"

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Breakfast = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    
    // search for the recipe
    const searchRecipes = async () => {
      setIsLoading(true);
      const url = searchApi + query
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
      setIsLoading(false);
    };
  
    useEffect(() => {
      searchRecipes()
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      searchRecipes();
    }
    
    return (
      <div>
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="rounded-[200px] w-full hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)]"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" className="py-1 bg-orange-400 rounded-2xl text-white p-4 "> Ingredients</a>
            </div>
        </div>
        <div className="max-w-6xl min-h-screen right-0 mt-6 ms-8">
     <h2 className="font-pacifico text-[50px] px-2"> Categories by type</h2>
     <Search
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      /></div>
      <div className="flex flex-row justify-center mt-[30px] flex-wrap  gap-[30px] ">
        
        {recipes ? recipes.map(recipe => (
          <Breakfast
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."} 
      </div>
    </div> 
    
    )
};

export default Breakfast
