import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Delete() {
  const [confirmation, setConfirmation] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (confirmation === 'Delete') {
      // Perform the deletion logic here (simulate or show a success message).
      // In a real application, you would make an API request to the backend.
      setIsDeleted(true);
    } else {
      alert('Please type "DELETE" to confirm account deletion.');
    }
  };

  return (
    <div>
      {isDeleted ? (
        <div>
        <p className='text-red-500 font-semibold text-center mt-10'>Your account has been deleted.</p>
        <Link to="/"><p className='text-center hover:text-orange-600'>Goback to Homepage</p></Link>
       </div>
        
      ) : (
        <div>   
        <p className='text-center text-xl font-poppins mt-[120px]'>Are you sure you want to delete your account?</p>
    <div className=' w-9/12 mx-auto mt-10'>
    <div className="flex w-full sm:w-10/12 mx-auto md:w-full xs:w-[300px] lg:flex-row flex-col justify-center ">
    <div className="w-full  lg:w-3/5 "></div>
    
          <div className='justify-center items-center absolute '>
          <input
            type="text"
            placeholder="Type 'Delete' to confirm"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            className="border-b-2 w-[500px] text-center font-normal border-black focus:outline-none hover:border-orange-400  focus:border-b-2 "
          />
          </div>
          <></>
         <div className='justify-center items-center absolute mt-[80px]'>
          <button onClick={handleDelete} className='bg-orange-600 border-0 text-white '>Delete Account</button>
         </div>
        
        </div>
        </div>
        </div>
      )}
    
    </div>
  );
}

export default Delete;