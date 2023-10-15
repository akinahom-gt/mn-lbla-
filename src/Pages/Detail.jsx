import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mealName = searchParams.get('name');
  const [mealDetails, setMealDetails] = useState(null);
  const [active, setActive] = useState('ingredient')


  useEffect(() => {
    async function fetchMealDetails() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        );

        if (!response.ok) {
          throw new Error('response was not ok');
        }

        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setMealDetails(data.meals[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMealDetails();
  }, [mealName]);

  return (
    <div>
      <div className="max-w-[1440px] mx-auto  ">
    <div className="w-11/12   mx-auto ">
      {mealDetails ? (
        <div>
          <h1 className='font-pacifico mt-10 text-[50px]'>A full guide to prepare <br></br>{mealDetails.strMeal}</h1>
          <div >
          <img src={mealDetails.strMealThumb} alt="recipe" className="w-[900px] h-[400px] mt-3"/>
          </div>
          <div className="inline-flex mt-9 gap-10">
    <button className="w-[300px] h-[40px] border-0  font-bold text-[24px] hover:text-orange-600 " onClick={()=>setActive('ingredient')}>Ingredient</button>
    <button className="w-[300px] h-[40px] border-0  font-bold text-[24px] hover:text-orange-600 " onClick={()=>setActive('instruction')}>Instruction</button>
     </div>
{

  active === 'ingredient' ? (
    <div className='px-[40px]'>
      <ul className='list-disc marker:text-orange-600 mt-6'>
      <li><div className='text-[20px] text-gray-600 '>{mealDetails.strIngredient1} - {mealDetails.strMeasure1}</div></li>
      <li><div className='text-[20px] text-gray-600 '>{mealDetails.strIngredient2} - {mealDetails.strMeasure2}</div></li>
      <li><div className='text-[20px] text-gray-600'>{mealDetails.strIngredient3} - {mealDetails.strMeasure3}</div></li>
      <li><div className='text-[20px] text-gray-600'>{mealDetails.strIngredient4} - {mealDetails.strMeasure4}</div></li>
      <li><div className='text-[20px] text-gray-600'>{mealDetails.strIngredient5} - {mealDetails.strMeasure5}</div></li>
      <li><div className='text-[20px] text-gray-600'>{mealDetails.strIngredient6} - {mealDetails.strMeasure6}</div></li> <br></br><br></br><br></br>
      </ul>
    </div>
) : (
  <div className='px-[400px] mt-6 '>
  <p className='text-[20px] text-gray-600 w-[500px]'>{mealDetails.strInstructions}  </p><br></br><br></br><br></br><br></br>
  </div>
)
}

          {/* <h2>{mealDetails.strMeal}</h2> */}
          {/* <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} /> */}
          {/* <p>{mealDetails.strInstructions}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
    </div>
  );
}

export default Detail;
