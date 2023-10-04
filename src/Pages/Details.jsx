import React, { useEffect, useState } from 'react'
// import Navbar from '../Components/Navbar'
// import Breakfast from './Breakfast'
import { useParams } from 'react-router-dom'


const RecipeId = () => {
    const {idMeal} = useParams()
    // console.log(useParams())

    const [data, setData] = useState([])
    const [active, setActive] = useState('ingredient')

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=53069`)
        const data = await api.json();
  
        // console.log(data.meals);
        setData(data.meals[0])
        // console.log(data)
      }
  
      fetchData();
    }, [idMeal])

  return (
    
    <div className="max-w-[1440px] mx-auto  ">
    <div className="w-11/12   mx-auto ">
      <h1 className='font-pacifico mt-10 text-[50px]'>A full guide to prepare <br></br>{data.strMeal}</h1>
      
        
     <div >
        <img src={data.strMealThumb} alt="recipe" className="w-[1000px] h-[400px] mt-3"/>
     </div>

<div className=''>
     <div className="inline-flex mt-9 gap-10">
    <button className="w-[300px] h-[40px] border-0  font-bold text-[24px] hover:bg-orange-300 hover:text-white" onClick={()=>setActive('ingredient')}>Ingredient</button>
    <button className="w-[300px] h-[40px] border-0  font-bold text-[24px] hover:bg-orange-300 hover:text-white" onClick={()=>setActive('instruction')}>Instruction</button>
     </div>
{

  active === 'ingredient' ? (
    <div className='px-[40px]'>
      <ul className='list-disc marker:text-orange-600'>
      <li><div className='text-[20px] text-gray-600'>{data.strIngredient1} - {data.strMeasure1}</div></li>
      <li><div className='text-[20px] text-gray-600 '>{data.strIngredient2} - {data.strMeasure2}</div></li>
      <li><div className='text-[20px] text-gray-600'>{data.strIngredient3} - {data.strMeasure3}</div></li>
      <li><div className='text-[20px] text-gray-600'>{data.strIngredient4} - {data.strMeasure4}</div></li>
      <li><div className='text-[20px] text-gray-600'>{data.strIngredient5} - {data.strMeasure5}</div></li>
      <li><div className='text-[20px] text-gray-600'>{data.strIngredient6} - {data.strMeasure6}</div></li>
      </ul>
    </div>
) : (
  <div className='px-[400px] mt-6 '>
  <p className='text-[20px] text-gray-600'>{data.strInstructions} </p>
  </div>
)
}


<p className='font-pacifico text-[50px] mt-10'>You might also like</p>
<div className='w-[1320px] h-[400px] bg-[#FFD7C9] mt-7'>
        <p className='font-pacifico text-[46px] text-center py-8'>Delciousness<br></br>to your inbox</p>
        <p className='font-poppins text-center  font-medium text-[20px]'> Enjoy weekly hand picked recipe and <br></br>recomendationst</p>
        <form>
        <div className=' inline-flex py-3 px-[455px]'>
          <input type="email" name="email" placeholder='Email Address' className='w-[350px] h-[55px] text-[20px] px-5' required/>
          <button className='w-[100px] h-[55px] bg-orange-500 text-white text-[20px] rounded-none border-0'>Join</button>
          </div>
          </form>
          <p className='font-poppins text-center py-3 font-medium text-gray-500 text-[14px]'> By joining our newsletter you agree to our terms and condition</p>

      </div>
     </div>
      </div>




   </div>
    
   
  )
}

export default RecipeId