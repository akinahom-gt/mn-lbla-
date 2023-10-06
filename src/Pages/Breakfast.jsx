import React, { useEffect, useState } from 'react'
// import {Splide, SplideSlide} from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom"
import {AiFillLike, AiTwotoneDislike} from "react-icons/ai"

 function Breakfast  () {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(25);
  const [activeBtn, setActiveBtn] = useState("none");
  const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    },[]);
    const getData = async () => {
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=t`)
        const data=await api.json();
        console.log(data);
        setData(data.meals);
    }
    // const handleLikeClick = () => {
    //   if (activeBtn === "none") {
    //     setLikeCount(likeCount + 1);
    //     setActiveBtn("like");
    //     return;
    //   }
  
    //   if (activeBtn === 'like'){
    //     setLikeCount(likeCount - 1);
    //     setActiveBtn("none");
    //     return;
    //   }
  
    //   if (activeBtn === "dislike") {
    //     setLikeCount(likeCount + 1);
    //     setDislikeCount(dislikeCount - 1);
    //     setActiveBtn("like");
    //   }
    // };
  
    // const handleDisikeClick = () => {
    //   if (activeBtn === "none") {
    //     setDislikeCount(dislikeCount + 1);
    //     setActiveBtn("dislike");
    //     return;
    //   }
      
    //   if (activeBtn === 'dislike'){
    //     setDislikeCount(dislikeCount - 1);
    //     setActiveBtn("none");
    //     return;
    //   }
  
    //   if (activeBtn === "like") {
    //     setDislikeCount(dislikeCount + 1);
    //     setLikeCount(likeCount - 1);
    //     setActiveBtn("dislike");
    //   }
    // };  
       
  return (
    <div>
       <div className=' w-11/12 mx-auto mt-6'>
       <p className='font-pacifico text-[40px] py-8 sm:text-left hover:text-orange-600'>Breakfast Category</p>
      
               {/* <Splide options={{
        perPage:6,
        arrows:false,
        pagination:false,
        drag:"free",
        gap:"5rem",
       }}> */}
       <div className=' inline-flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        { data.map((recipe) => {
            return(
                <div>
                    {/* <SplideSlide> */}
                    {/* <p className="font-poppins text-xl text-gray-700 font-medium">{recipe.title}</p>
                    <div className='w-[300px] min-h-min '> */}
                  
                    <img src={recipe.strMealThumb} alt="{recipe.title}"  
                    className=" w-[200px] h-[200px] hover:shadow-[0_35px_100px_-5px_rgba(0,0,0,0.5)] hover:z-50 rounded-full "/>
                   
                  <Link to="/details" className='font-poppins text-[15px] px-[93px] mt-4 text-gray-500 font-semibold '>
                  {/* to={`/${data.idMeal}`} key={data.idMeal} */}
                    {recipe.strMeal}
                   </Link>
      {/* <button className={`btn ${activeBtn === 'like' ? 'like-active' : ''} border-0`}   onClick={handleLikeClick} >
       <AiFillLike size={25} style={{color:'red'}}/>{likeCount}
      </button>

        <button className={`btn ${activeBtn === 'dislike' ? 'dislike-active' : ''} border-0`} onClick={handleDisikeClick}>
        <AiTwotoneDislike size={25} style={{color:'black'}}/> {dislikeCount}
        </button> */}
                    {/* </div> */}
                    {/* </SplideSlide> */}
                </div>
                
            )
        }) }</div>
       
      </div> 
    </div>
  )
}
export default Breakfast