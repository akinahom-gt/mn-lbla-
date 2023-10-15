import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Rating from "../Components/Rating"
 function Vegetarian  () {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
        const data=await api.json();
        console.log(data);
        setData(data.meals);
    }
       
  return (
    <div>
       <div className=' w-11/12 mx-auto mt-6'>
       <p className='font-pacifico text-[40px] py-8 sm:text-left'>Popular Category / Vegetarian</p>
       <div className=' inline-flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { data.map((recipe) => {
            return(
                <div key={recipe.idMeal}>
                  
                  <img src={recipe.strMealThumb} alt="{recipe.title}"  
                  className=" w-[200px] h-[200px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full "/>
                   
                   <Rating/>
                  <Link to="/details" className='font-poppins text-[15px] w-[50px] text-gray-500 font-semibold '>
                  <div className='px-9'>{recipe.strMeal}</div>
                   </Link>
                </div>
                
            )
        }) }</div>
       
      </div> 
    </div>
  )
}
export default Vegetarian