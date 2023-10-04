import React, { useEffect, useState } from 'react'
// import {Splide, SplideSlide} from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom"

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
       <div className=' w-11/12 mx-auto mt-10'>
       <p className='font-pacifico text-[40px] py-8 sm:text-left'>Popular Category / Vegetarian</p>
      
               {/* <Splide options={{
        perPage:6,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"5rem",
       }}> */}
       <div className=' inline-flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { data.map((recipe) => {
            return(
                <div>
                    {/* <SplideSlide> */}
                    {/* <p className="font-poppins text-xl text-gray-700 font-medium">{recipe.title}</p>
                    <div className='w-[300px] min-h-min '> */}
                  
                    <img src={recipe.strMealThumb} alt="{recipe.title}"  
                    className=" w-[250px] h-[250px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full "/>
                   
                  <Link to="/details" className='font-poppins text-[15px] text-center mt-4 text-gray-500 hover:text-orange-600 font-semibold '>
                  {/* to={`/${data.idMeal}`} key={data.idMeal} */}
                    {recipe.strMeal}
                   </Link>
                    {/* </div> */}
                    {/* </SplideSlide> */}
                </div>
                
            )
        }) }</div>
       
      </div> 
    </div>
  )
}
export default Vegetarian