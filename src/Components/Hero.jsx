import React from 'react'
import {BiTrendingUp} from "react-icons/bi"
import {AiFillStar} from "react-icons/ai"
import HeroPic from "../images/hero.jpg"
import PopularCat from './PopularCat'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className=' w-11/12 mx-auto mt-10'>
      <div className="flex w-full sm:w-10/12 mx-auto lg:w-full lg:flex-row flex-col justify-center ">
        <div className="w-full  lg:w-3/5 ">
          <img className="lg:rounded-l-md rounded-t-md lg:rounded-r-none w-full h-full"src={HeroPic} alt="" />
        </div>
        <div className="w-full lg:rounded-r-md lg:rounded-l-none rounded-b-md bg-blue-200 lg:w-2/5 ">
          <div className="flex flex-col lg:items-center gap-4 lg:gap-7 pb-10 pt-10 lg:pt-20  px-5 sm:px-7  md:px-12 lg:px-10 justify-center">
              
            <div className="flex lg:items-center flex-col-reverse lg:flex-col gap-3 lg:gap-5">
            <h1 className="font-pacifico text-xl sm:text-3xl md:text-4xl xl:text-5xl lg:text-center w-full xl:w-3/4">Lovely Soft Chocolate Cake </h1>
            <div className="flex items-center  text-Tertiary-Black-200  gap-1 ">
              <BiTrendingUp size={20}  />
              <p className="font font-poppins capitalize md:text-sm text-xs">85% Would make this again.</p>
</div>
            </div>
            <p className="font-poppins text-sm sm:text-lg lg:text-center ">Indulge in the ultimate chocolate experience with The Most Amazing Chocolate Cake. Moist, rich, and made in a single bowl. Satisfy your chocolate cravings with the chocolate cake of your dreams.</p>
          </div>

        </div>
      </div>

      <Link to="/lunch"  >
      <p className='font-pacifico text-[31px] py-8 sm:text-left hover:text-orange-600'>Super Delicious</p>  
      </Link>     
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 '> 
      <div>
      <img src={require('../images/burgerrated.jpg')}  className="w-full h-[250px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <div className='inline-flex py-4 gap-4'>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      </div>
      <p className="font-poppins text-xl text-gray-700 font-medium">Cheesy and tander burger</p>
      </div>
      <div>
      <img src={require('../images/pastarated.jpg')}  className="w-full h-[250px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50  " alt=""/>
      <div className='inline-flex py-4 gap-4'>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      </div>
      <p className="font-poppins text-xl text-gray-700 font-medium">Mouth watering pasta</p>
      </div>
      <div>
      <img src={require('../images/lunchrated.jpg')}  className="w-full h-[250px]  hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <div className='inline-flex py-4 gap-4'>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      </div>
      <p className="font-poppins text-xl text-gray-700 font-medium">A well balanced lunch</p>
      </div>
      

      </div>
      <Link to="/dessert"  >

      <p className='font-pacifico text-[31px] py-8 sm:text-left hover:text-orange-600'>Sweet tooth</p>  
       </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 '> 
      <div>
      <img src={require('../images/donutrated.jpg')}  className="w-full h-[250px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <div className='inline-flex py-4 gap-4'>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      </div>
      <p className="font-poppins text-xl text-gray-700 font-medium">Fluffy and  creamy donut</p>
      </div>
      <div>
      <img src={require('../images/pancakerated.jpg')}  className="w-full h-[250px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50  " alt=""/>
      <div className='inline-flex py-4 gap-4'>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      </div>
      <p className="font-poppins text-xl text-gray-700 font-medium">Soft and healthy  pancake </p>
      </div>
      <div>
      <img src={require('../images/waffelrated.jpg')}  className="w-full h-[250px]  hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <div className='inline-flex py-4 gap-4'>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      <AiFillStar size={25} style={{color:'orange'}}/>
      </div>
      <p className="font-poppins text-xl text-gray-700 font-medium">A well balanced lunch</p>
      </div>
      </div>
      <PopularCat/>
      <div className='w-[1320px] h-[400px] bg-[#FFD7C9] xs:w-full sm:w-full mt-7'>
        <p className='font-pacifico text-[46px] text-center py-8'>Delciousness<br></br>to your inbox</p>
        <p className='font-poppins text-center  font-medium text-[20px]'> Enjoy weekly hand picked recipe and <br></br>recomendationst</p>
        <form>
        <div className=' inline-flex py-3 lg:px-[455px] md:px-[200px] xs:px-[50px] sm:px-[100px] '>
          <input type="email" name="email" placeholder='Email Address' className='w-[350px] h-[55px] text-[20px] px-5' required/>
          <button className='w-[100px] h-[55px] bg-orange-500 text-white text-[20px] rounded-none border-0'>Join</button>
          </div>
          </form>
          <p className='font-poppins text-center py-3 font-medium text-gray-500 text-[14px]'> By joining our newsletter you agree to our terms and condition</p>

      </div>
      
      <p className='font-pacifico text-[40px] py-8 sm:text-left hover:text-orange-600'>Hand-picked Collections</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2  gap-4 '> 
      <div>
      <img src={require('../images/combo.jpg')}  className="w-[700px] h-[300px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <p className="font-poppins text-xl text-gray-700 font-medium">Fluffy and  creamy donut</p>
      </div>
      <div>
      <img src={require('../images/donut1.jpg')}  className="w-[700px] h-[300px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50  " alt=""/>
      <p className="font-poppins text-xl text-gray-700 font-medium">Soft and healthy  pancake </p>
      </div>
      <div>
      <img src={require('../images/shawarma.jpg')}  className="w-[700px] h-[300px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <p className="font-poppins text-xl text-gray-700 font-medium">A well balanced lunch</p>
      </div>
      <div>
      <img src={require('../images/vegicombo.jpg')}  className="w-[700px] h-[300px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <p className="font-poppins text-xl text-gray-700 font-medium">Fluffy and  creamy donut</p>
      </div>
      <div>
      <img src={require('../images/pizza.jpg')}  className="w-[700px] h-[300px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50  " alt=""/>
      <p className="font-poppins text-xl text-gray-700 font-medium">Soft and healthy  pancake </p>
      </div>
      <div>
      <img src={require('../images/pasta.jpg')}  className="w-[700px] h-[300px]  hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 " alt=""/>
      <p className="font-poppins text-xl text-gray-700 font-medium">A well balanced lunch</p>
      </div>
      </div>
      <p className='font-pacifico text-[40px] mt-10 hover:text-orange-600'>Latest Recipes</p>
      <div className='inline-flex gap-[60px]'>
      <img src={require('../images/latestcake.jfif')}  className="w-[700px] h-[300px] mt-10 hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50  " alt=""/>
      <img src={require('../images/soup.jfif')}  className="w-[700px] h-[300px] mt-10 hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50  " alt=""/>
      </div>
    </div>
  )
}

export default Hero