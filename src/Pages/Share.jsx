import React,{useState} from 'react'
// import AiOutlineUpload from 'react-icons/ai'
import {FiUpload }from 'react-icons/fi'

import axios from 'axios';
 const Share = () => {
  const [countc, setCountc] = useState(5);
  const [countp, setCountp] = useState(5);
  const [image, setImage] = useState(' ')

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
 
    function handleImage(e){
      console.log(e.target.files)

      setImage(e.target.files[0])
    }
  // function handle(){
  //   const formData = new FormData()
  //   formData.append('image', image)
  //   axios.post ('url', formData).then((res) => {
  //     console.log(res)
  //   }
      
    // )
    // }
  

  return (
    <div>  
    
    <p className='font-pacifico text-[40px] text-center   px-[100px] mt-8'>Add recipe</p>
    <div className=' w-9/12 mx-auto mt-10'>
    <div className="flex w-full sm:w-10/12 mx-auto md:w-full xs:w-[300px] lg:flex-row flex-col justify-center ">
    <div className="w-full  lg:w-3/5 "></div>
        <div className="px-[70px]  rounded-[20px]">
        <hr className=" border-t-2 lg:w-[900px] sm:w-full h-[1px] border border-black border-opacity-30"></hr> 
        <p className='text-left font-poppins text-[21px] mt-7'>Title </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder=' Title ' className='lg:w-[900px] md:w-[520px] h-[45px] mt-2 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' />
          <p className='text-left font-poppins text-[21px] mt-8'>Choose Photo </p>
          <div className='w-[900px] h-[200px] bg-[#FFD7C9] text-center rounded-xl font-Poppins text-xl font-semibold py-10 mt-5' >
         
         <div className='px-[430px]'><FiUpload size={40}/></div>
          <label htmlFor="photos" className='mt-5'>Upload Your Picture</label>
          <p className='mt-4 font-normal text-[16px]'>"Maximum size 3MB"</p>
          </div>
          <input  class="hidden" id="photos" type="file" name="file" accept="/image" onChange={handleImage} />
         
          {/* <button onClick={handle}>Upload</button> */}
          <p className='text-left font-poppins text-[21px] mt-8'>Information </p>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
          <p className='text-left font-poppins text-[16px] text-gray-500 mt-8'>Preparation time </p>
          <div className='mt-8 w-[300px] h-[35px] bg-[#FFD7C9] text-center py-1 inline-flex gap-[90px] rounded-xl'>
          <button className='w-[8px] border-0 text-left text-xl' onClick={() => setCountp(countp - 1)} id="prepare">-</button>
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
          <p className='text-left font-poppins text-[16px] text-gray-500 mt-8'>Difficulty </p>
          <input type="text" name="diff" placeholder=' DIfficulty ' className='w-[300px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' />
          </div>
          <div className='grid lg:grid-cols-2 '>
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
          <input type="text" name="dir" placeholder='  ' className='lg:w-[840px] md:w-[550px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' />
          <p className='text-left font-poppins text-[21px] mt-8'>Hashtags </p>
          <input type="text" name="dir" placeholder='  ' className='lg:w-[840px] md:w-[550px] h-[35px] mt-6 bg-[#FFD7C9] text-[20px] px-5 rounded-xl' />
          <div>
          <button type="submit" className='w-[100px] h-[40px] bg-orange-600 mt-9 text-white border-0 rounded-xl'> SUBMIT </button>
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