import React from 'react'
import Avatar from "../images/avatar_.jpg"
// import Footer from './Components/Footer.jsx'
import { Link } from "react-router-dom"

import {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
const Profile = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
    const [avatar, setAvatar] = useState(null);

  // Function to handle file input change
  const handleFileChange = (event) => {
  const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to delete the avatar
  const deleteAvatar = () => {
    setAvatar(avatar.jpg);
  };
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    recipe:'',
    news:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <div className="max-w-[1440px] mx-auto  "> 
    <div className="w-11/12 mx-auto mt-10 ">
    <div className=" text-black text-2xl  font-semibold tracking-widest">Profile</div>
    
    <div className="w-[150px] h-[30px] relative rounded-[20px]"></div>
  
  <hr className=" border-t-2 w-[1310px] sm:w-full h-[1px] border border-black border-opacity-30"></hr>


<div className=' flex flex-row gap-[30px]  mt-[70px] '>
      {avatar ? (
        <div >
          <img src={avatar} alt="Avatar" className="rounded-full w-[120px] h-[120px]" />
        </div>
      ) : (
       
        <div className="w-[90px] h-[100px]  rounded-full ">
            <img className=' w-12 sm:w-24' src={Avatar} alt=""/>
    <div className="w-[28px] h-[18px] relative origin-top-left -rotate-90"></div>
        </div>
        
      )}
  <div className="p-3  inline-flex gap-7 sm:p-6">
    <div  className= " w-[100px] h-[30px]  sm:h-[40px] sm:w-[120px]  hover:bg-orange-600 bg-orange-500 rounded-full  items-center  inline-flex">
        <button className=" border-0 text-center px-2 py-4 text-white text-[13px] sm:text-[15px]  leading-normal" >
          <label htmlFor="photos">Change Photo</label>
        </button>
        </div>
      <input class="hidden" id="photos" type="file" accept="image/*" onChange={handleFileChange} />
    <div className="w-[93px] h-[30px] sm:h-[40px] sm:w-[120px] bg-white border border-black rounded-full item-center inline-flex">
      <button onClick={deleteAvatar} className=" border-0 w-[90px]  sm:w-[110px] text-[13px] sm:text-[15px] text-center text-black leading-normal">Delete</button>
    </div>
  </div>
</div>
{/* end */}
{/* Name&email */}
<form onSubmit={handleSubmit}>

<div className= " sm:left-[30px] mt-[30px] sm:flex sm:flex-row  grid grid-cols-1  sm:gap-10 ">
<div className="w-[349px] h-[348px]  grid grid-cols-1  justify-start items-start  ">
        <div className="text-slate-600 text-[14px] sm:text-[16px]  p-2  font-bold ">
          <label htmlFor="name">Name: </label>
          <div className="  p-2 w-[30px] sm:w-[60px] backdrop-blur-[6px]"></div>
          <input
            class="border-b w-[300px] sm:w-[349px] font-normal  border-black focus:outline-none focus:border-orange-400  focus:border-b-2"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-slate-600 w-[100px] text-[14px] sm:text-[16px] py-[40px] p-2 font-bold ">
          <label htmlFor="email">Email: <div className="  p-2 width-[10px] backdrop-blur-[8px]"></div></label>
          <input
            class="border-b w-[300px] sm:w-[349px] font-normal border-black focus:outline-none focus:border-orange-400  focus:border-b-2 "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
        </div>
        </div>
        <div className="w-[349px] h-[348px] grid grid-cols-1  justify-start items-start  ">

        <div className="text-slate-600 w-[100px] text-[14px] sm:text-[16px] p-2 font-bold ">
          <label htmlFor="username">Username:<div className="  p-2 width-[10px] backdrop-blur-[8px]"></div></label>
          <input
            class="border-b w-[300px] sm:w-[349px] font-normal border-black focus:outline-none focus:border-orange-400  focus:border-b-2 "
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="text-slate-600 w-[100px] text-[14px] sm:text-[16px] py-[50px] p-2 font-bold ">
          <label htmlFor="password">Password:<div className="  p-2 width-[10px]">
         </div></label>
          <input
            class="border-b w-[300px] sm:w-[349px] font-normal border-black focus:outline-none focus:border-orange-400  focus:border-b-2 "
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        <div className="w-[90px] h-[35px] sm:w-[110px] sm:h-[40px] right-[160px] sm:top-[140px]
         top-[70px] rounded-full absolute hover:bg-orange-600 bg-orange-500">
        <button className="sm:left-[15px] left-[8px] absolute  text-center border-0 text-white
         sm:text-[23px] text-[20px] font-normal " type="submit">Save</button>
       </div>
        </div>
        
        
    </div>
    <div className= " sm:left-[30px] sm:flex sm:flex-row  grid grid-cols-1  sm:gap-10 ">
    <div className="w-[349px] h-[348px] grid grid-cols-1  justify-start items-start  ">

    <div className="text-slate-600 text-[14px] sm:text-[16px] py-2 p-2 font-bold ">
          <label htmlFor="name">Your shared recipe: </label>
          <div className="  p-2 w-[30px] sm:w-[60px] backdrop-blur-[6px]"></div>
          <input
            class="border-b w-[300px] sm:w-[735px] font-normal  border-black focus:outline-none focus:border-orange-400  focus:border-b-2"
            type="text"
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-slate-600 text-[14px] sm:text-[16px] py-2 p-2 font-bold ">
          <label htmlFor="name">Newsletter:
          <div className='px-[190px] sm:px-[625px]'>
          <button className="rounded-sm text-black font-normal border-slate-400 "> Subscribe</button >
           </div></label>
          <div className="  p-2 w-[30px] sm:w-[60px] backdrop-blur-[6px]"></div>
          <input
            class="border-b w-[300px] sm:w-[735px] font-normal  border-black focus:outline-none focus:border-orange-400  focus:border-b-2"
            type="text"
            id="news"
            name="news"
            value={formData.news}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        </div>
        </form>
<div className= " max-w-[1150px] sm:left-[30px] mx-auto sm:flex sm:flex-row  grid grid-cols-1  sm:gap-10  ">
{/* <button onClick={togglePasswordVisibility} className="border-0 absolute xs:top-[930px] lg:top-[620px] lg:left-[530px] sm:top-[620px] sm:left-[440px] items-center px-[270px] sm:px-[320px]" >
        {showPassword ?  <AiFillEye size={20}/>:<AiFillEyeInvisible size={18} />} 
      </button> */}
{/* <button className='border-0 '> Sign Out</button> */}
<Link to="/delete">
<button className='border-0 text-orange-500 hover:text-orange-600'>Delete Account</button>
</Link>
</div>

</div>
</div>

  );
};

export default Profile