import React from 'react'
import { Link } from "react-router-dom"
 
 const PopularCat = () => {
  return (
    <div>
        <h2 className='font-pacifico mt-6 text-[40px] '>Popular Categories</h2>
        <div className='inline-flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4 xs:gap-9 mt-10 gap-[10px] '>
        <div>
        <img src={require('../images/seafood.jfif')} alt="seafood" className='w-[150px] h-[150px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full '/>
        <Link to="/seafood" >
        <p className='font-poppins text-[15px] px-[50px] mt-4 text-gray-500 font-semibold'>Seafood</p>
        </Link>
        </div>
        <div>
        <img src={require('../images/soup.jfif')} alt="" className='w-[150px] h-[150px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full '/>
        <Link to="/starter" >
        <p className='font-poppins text-[15px] px-[50px] mt-4 text-gray-500 font-semibold '>Starter</p>
        </Link>
        </div>
       
        <div>
        <img src={require('../images/chicken.jpg')} alt="" className='w-[150px] h-[150px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full '/>
        <Link to="/chicken" >
        <p className='font-poppins text-[15px] px-[50px] mt-4 text-gray-500 font-semibold '>Chicken</p>
        </Link>
        </div>
       
        <div>
        <img src={require('../images/break.jfif')} alt="" className='w-[150px] h-[150px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full '/>
        <Link to="/breakfast">
        <p  className='font-poppins text-[15px] px-[50px] mt-4 text-gray-500 font-semibold '>Breakfast</p>
        </Link>
        </div>
        
        <div>
        <img src={require('../images/vegicombo.jpg')} alt="" className='w-[150px] h-[150px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full '/>
        <Link to="/vegetarian"  >
        <p  className='font-poppins text-[15px] px-[50px] mt-4 text-gray-500 font-semibold ' >Vegetarian</p>
        </Link>
        </div>
        <div>
        <img src={require('../images/lunchrated.jpg')} alt="" className='w-[150px] h-[150px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full '/>
        <Link to="/lunch"  >
        <p  className='font-poppins text-[15px] px-[50px] mt-4 text-gray-500 hover:text-orange-600 font-semibold ' >Lunch</p>
        </Link>
        </div>
        
        </div>
    <div >
    
  
  
  
  
   </div>
    </div>
  )
}
export default PopularCat
