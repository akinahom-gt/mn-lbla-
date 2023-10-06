import React from 'react'
import Logo from '../images/Logo.svg'
import { useLocation } from "react-router-dom";

import {BiLogoFacebook, BiLogoTelegram, BiLogoInstagram, BiLogoTwitter }from 'react-icons/bi'
const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check a more conditions here
  if (pathname === "/delete") return null;
  return (
    
    <div className='p-7  relative inset-x-0  bottom-0 bg-gray-200 text-black'>
      <div className=' xs:text-center mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:gap-2 '> 
         <div className=''>
          {/* <img className="md:w-[50px]  xs:w-[50px] mx-[100px]  sm:w-[40px] " src={Logo} alt=''/> */}
           <h4 className='font-pacifico  text-[40px] '>mn lbla</h4>
           <p className='md:py-1  xs:text-center  text-[#6D737A]'>try new recipes from all <br></br>over the world with us</p>
         </div>
         <div className='md:py-7 mb-5'>
          <h4 className='font-pacifico text-[25px]'>mn lbla</h4>
          <ul className='text-gray-500 font-poppins py-3'>
          <li className=' hover:underline hover:text-orange-600'>About Us</li>
          <li className=' hover:underline hover:text-orange-600'>Contact Us</li>
          <li className=' hover:underline hover:text-orange-600'>Feedback</li>
          <li className=' hover:underline hover:text-orange-600'>Carrers</li>
          </ul>
         </div>
         <div className='md:py-7 mb-5'>
          <h4 className='font-pacifico text-[25px]'>Legal</h4>
          <ul className='text-gray-500 font-poppins py-3'>
          <li className=' hover:underline hover:text-orange-600' >Terms</li>
          <li className=' hover:underline hover:text-orange-600'>Cookies</li>
          <li className=' hover:underline hover:text-orange-600'>Copyright</li>
          <li className=' hover:underline hover:text-orange-600'>Conditions</li>
          
          </ul>
         </div>
         <div className='md:py-7 mb-5'>
          <h4 className='font-pacifico text-[25px]'>Follow</h4>
          <ul className='text-gray-500 font-poppins py-3'>
          <li className=' hover:underline hover:text-orange-600'>Facebook</li>
          <li className=' hover:underline hover:text-orange-600'>Instagram</li>
          <li className=' hover:underline hover:text-orange-600'>Telegram</li>
          <li className=' hover:underline hover:text-orange-600'>Twitter</li>
          </ul>
          
         </div>
        </div>

      </div>
  <div className=' inline-flex right-7 absolute flex-row mx-auto justify-between items-center gap-[30px] '>
 <div className=' rounded-xl mx-1 pt-1'><BiLogoFacebook size={23} style={{color:'#1877F2'}} /></div>
 <div className=' rounded-xl '><BiLogoTelegram size={23} style={{color:'#000000'}}/></div>
 <div className=' rounded-xl '><BiLogoInstagram size={23} style={{color:'#833AB4'}}/></div>
 <div className=' rounded-xl'><BiLogoTwitter size={23} style={{color:'1da1f2'}}/> </div>  
  </div>
  </div> 
    )
  }
  export default Footer
