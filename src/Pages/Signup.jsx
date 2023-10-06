import React, {useState,useEffect} from 'react'
// import Login from './Pages/Login.jsx'
import { Link } from "react-router-dom"
import {AiOutlineMail,AiOutlineUser,AiOutlineLock} from 'react-icons/ai'
const Signup = () => {
  
  const initialValues = { fullname: "", email: "", password: "" };
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
    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters";
    }
    return errors;
  };

  return (
    <div className=' w-11/12 mx-auto mt-10'>
    <div className="flex w-full sm:w-10/12 mx-auto lg:w-full lg:flex-row flex-col justify-center ">
      <div className="w-full  lg:w-3/5 ">
      <p className="text-left font-poppins font-medium text-[40px]">Sign Up</p>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-green-600 text-xl">Signed Up successfully!</div>
      ) : (
<div></div>      )}
     <form  onSubmit={handleSubmit}>
      <div className='py-8 text-[px] inline-flex text-gray-500 font-poppins font-medium gap-7'>
      <AiOutlineUser size={30}/>
      <label>Full Name</label>    
      </div>
      <div>
          <input
            class="border-b-2 w-[500px] font-normal border-black focus:outline-none hover:border-orange-400  focus:border-b-2 "
            type="text"
            id="fullname"
            name="fullname"
            value={formValues.fullname}
            onChange={handleChange}
            required
          /></div> 
          <p className='text-red-600'>{formErrors.fullname}</p>

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
             <p className='text-red-600'>{formErrors.password}</p>

          <div className=' py-9 space-y-3'>
          <Link to='/profile'>
          <input className='w-[240px] h-[60px] bg-orange-600  transition-all duration-300 hover:bg-Primary-Orange-200 font-poppins tracking-widest border-0 text-white px-6 py-2 rounded-full' type="submit" name="submit" value="Sign Up"/>
          {/* <button className='w-[240px] h-[60px] bg-orange-600 transition-all duration-300 hover:bg-Primary-Orange-200 font-poppins tracking-widest border-0 text-white px-6 py-2 rounded-full'>Login</button> */}
          </Link>
          </div>
          </form>
          <p className="text-black text-lg font-medium font-Poppins">Don't have an account?
            <Link to="/Login" className="text-orange-400 border-b-2 border-orange-400">  Sign in</Link></p>
          <p className='text-gray-700 text-xl font-normal font-Poppins'>By creating an account you agree to our</p>
          <p className='text-orange-400 text-xl font-normal font-Poppins'>terms and conditions</p>
          
      </div>
    </div>
    </div>
  )
}
export default Signup