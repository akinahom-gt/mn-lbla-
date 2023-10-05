import React,{useState} from 'react'

 const Share = () => {
  const [countc, setCountc] = useState(5);
  const [countp, setCountp] = useState(5);

  return (
    <div>  
    
    <p className='font-pacifico text-[40px] text-center mt-8'>Add recipe</p>
    <div className=' w-11/12 mx-auto mt-10'>
    <div className="flex w-full sm:w-10/12 mx-auto md:w-full lg:flex-row flex-col justify-center ">
    <div className="w-full  lg:w-3/5 "></div>
        <div className="px-[90px] absolute   rounded-[20px]">
        <hr className=" border-t-2 lg:w-[900px] sm:w-full h-[1px] border border-black border-opacity-30"></hr> 
        <p className='text-left font-poppins text-[21px] mt-7'>Title </p>
        <form>
          <input type="text" name="title" placeholder=' Title ' className='w-[900px] h-[45px] mt-2 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' />
          <p className='text-left font-poppins text-[21px] mt-8'>Choose Photo </p>
          <p className='text-left font-poppins text-[21px] mt-8'>Information </p>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <p className='text-left font-poppins text-[16px] text-gray-500 mt-8'>Preparation time </p>
          <div className='mt-8 w-[300px] h-[35px] bg-[#FFD7C9] text-center py-1 inline-flex gap-[90px] rounded-xl'>
          <button className='w-[8px] border-0 text-left text-xl' onClick={() => setCountp(countp - 1)}>-</button>
          <p className=' text-gray-600 py-2'> {countp}Min </p>
          <button className='w-[8px] border-0 text-right text-xl' onClick={() => setCountp(countp + 1)} id="prepare">+</button>
          </div>        
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <p className='text-left font-poppins text-[16px] text-gray-500 mt-8'>Cooking time </p>
          <div className='mt-8 w-[300px] h-[35px] bg-[#FFD7C9] text-center py-1 inline-flex gap-[90px] rounded-xl'>
          <button className='w-[8px] border-0 text-left text-xl' onClick={() => setCountc(countc - 1)}>-</button>
          <p className=' text-gray-600 py-2'> {countc}Min </p>
          <button className='w-[8px] border-0 text-right text-xl' onClick={() => setCountc(countc + 1)}>+</button>
          </div>
         </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <p className='text-left font-poppins text-[16px] text-gray-500 mt-8'>DIfficulty </p>
          <input type="number" name="preparation" placeholder=' DIfficulty ' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' />
          </div>
          <div className='grid grid-cols-2'>
          <div>
          <p className='text-left font-poppins text-[21px] mt-8'>Ingredients </p>
          <input type="text" name="ing" placeholder='Ingredient 1 ' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          <input type="text" name="ing" placeholder='Ingredient 2 ' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          <input type="text" name="ing" placeholder='Ingredient 3 ' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          </div>
          <div>
          <p className='text-left font-poppins text-[21px] mt-8'>Directions </p>
          <input type="text" name="dir" placeholder=' Direction 1 ' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          <input type="text" name="dir" placeholder=' Direction 2' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          <input type="text" name="dir" placeholder=' Direction 3' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          </div>
          </div>
          <p className='text-left font-poppins text-[21px] mt-8'>Categories </p>
          <p className='text-left font-poppins text-[21px] mt-8'>Hashtags </p>
          <input type="text" name="dir" placeholder='  ' className='w-[840px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' required/>
          <div>
          <input type="submit" className='w-[100px] bg-orange-600 mt-10 text-white rounded-sm' value="SUBMIT"/>
          </div>
          </form>
          {/* <div className='top-0'>
          <button className='w-[8px] border-0  text-[30px]' onClick={() => setCount(count - 1)}>-</button>
          <button className='w-[8px] border-0  text-xl' onClick={() => setCount(count + 1)}>+</button>
          </div> */}
          
 
         </div>
      </div>
      </div> 
    </div>
  )
}
export default Share