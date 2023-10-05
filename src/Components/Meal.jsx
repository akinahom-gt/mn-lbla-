import React from "react";
//import './Components/style.css';
// import './style.css';
const Meal=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
        <div className="w-[100px] h-[100px] rounded-full grid grod-cols-5">
         <img src={getMeal.data.strMealThumb} alt="meal" className="w-[100px] h-[100px] rounded-full"/>
         <h2>{getMeal.data.strMeal}</h2>
        </div>
                        
             
        </>
    )
}
export default Meal;