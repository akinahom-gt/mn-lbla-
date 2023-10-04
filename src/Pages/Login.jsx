import React, {useState,useEffect} from 'react'
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai'
import { Link } from "react-router-dom"
import {BiLogoFacebook,BiLogoGoogle, BiLogoTwitter }from 'react-icons/bi'

const Login = () => {
  const initialValues = {  email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }
  // eslint-disable-next-line
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
 
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
   <div> errors.password = "Password is required";</div>
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};

  return (
    <div className=' w-11/12 mx-auto mt-10'>
    <div className="flex w-full sm:w-10/12 mx-auto lg:w-full lg:flex-row flex-col justify-center ">
      <div className="w-full  lg:w-3/5 ">
      <p className="text-left font-poppins font-medium text-[40px]">LOGIN</p>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-green-600 ">Signed in successfully!</div>
      ) : (
<div></div>      )}
      <form onSubmit={handleSubmit}>
      <div className='py-8 text-[px] inline-flex text-gray-500 font-poppins font-medium gap-7'>
      <AiOutlineMail size={30}/>
      <label>Email</label>    
      </div>
      <div>
          <input
            class="border-b-2 w-[500px] font-normal border-black focus:outline-none hover:border-orange-400  focus:border-b-2 "
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          /></div> 
                    <p className='text-red-600'>{formErrors.email}</p>

     <div className='py-8 text-[px] inline-flex text-gray-500 font-poppins font-medium gap-7'>
      <AiOutlineLock size={30}/>
      <label>Password</label>    
      </div>
      <div>
          <input
            class="border-b-2 w-[500px] font-normal border-black focus:outline-none hover:border-orange-400  focus:border-b-2 "
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          /></div> 

          <div className=' py-9 space-y-3'>
          <p className="text-orange-400 px-[370px]">Forgot password?</p>
          <p className='text-red-600'>{formErrors.password}</p>
          <button className='w-[240px] h-[60px] bg-orange-600 transition-all duration-300 hover:bg-Primary-Orange-200 font-poppins tracking-widest border-0 text-white px-6 py-2 rounded-full'>Login</button>
          </div>
          </form>
    <div class="flex w-[520px] items-center py-4">
        <div class="flex-grow h-px bg-gray-400"></div> 
        <span class="flex-shrink text-xl text-gray-400 px-4 font-poppins font-light">or Login with</span>
        <div class="flex-grow  h-px bg-gray-400"></div>
    </div>
        <div className='inline-flex  gap-6 px-[190px]'>
          <div className=' rounded-xl'><BiLogoFacebook size={35} style={{color:'#1877F2'}} /></div>
          <div className=' rounded-xl'><BiLogoGoogle size={35}  /></div>
          <div className=' rounded-xl'><BiLogoTwitter size={35} style={{color:'1da1f2'}}/> </div>  
        </div>
      <p className=' text-black font-poppins py-5'>Don't have an account? 
      <Link to="/sign up" className="text-blue-400 font-poppins font-semibold">  Sign Up </Link>
      </p>
      </div>
    </div>
    </div>
  )
}
export default Login