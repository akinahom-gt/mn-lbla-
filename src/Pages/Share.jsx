import React from 'react'

 const Share = () => {
  return (
    <div>  
    <p className='font-pacifico text-[40px] text-center mt-8'>Add recipe</p>
    <div className=' w-11/12 mx-auto mt-10'>
    <div className="flex w-full sm:w-10/12 mx-auto lg:w-full lg:flex-row flex-col justify-center ">
    <div className="w-full  lg:w-3/5 "></div>
        <div className="px-[140px] absolute   rounded-[20px]">
        <hr className=" border-t-2 lg:w-[1300px] sm:w-full h-[1px] border border-black border-opacity-30"></hr> 
        <p className='text-left font-poppins text-[30px] mt-8'>Title </p>
        <form>
          <input type="text" name="title" placeholder=' Title ' className='w-[1300px] h-[55px] mt-4 bg-[#FFD7C9] text-[20px] px-5 ' required/>
          
          </form>
        </div>
    
       
    
      </div>
      </div>
    </div>
  )
}
export default Share