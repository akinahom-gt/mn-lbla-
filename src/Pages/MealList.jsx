import React, { useEffect, useState } from 'react';
import {GoSearch} from "react-icons/go"

import axios from 'axios';

function MealList() {
  const [meal, setMeal] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      if (response.data.meals) {
        setMeal(response.data.meals[0]);
      } else {
        setMeal({});
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching meal details:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=''>
      <input
        className='outline-orange-400 rounded-xl font-poppins '
        type="text"
        placeholder="Enter meal name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch} className='w-[50px] border-0 px-4'>     
       <GoSearch className="transition-all duration-300 group-hover:text-Primary-Orange-100" size={30}/>
      </button>
</div>
      {loading && <div>Loading meal details...</div>}

      {meal.strMeal && !loading && (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
          {/* You can display other meal details as needed */}
        </div>
      )}
    </div>
  );
}

export default MealList;
