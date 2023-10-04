import React,{useState,useEffect,useRef} from 'react'
import Logo from "../images/Logo.svg"
import Menu from "../images/menu-alt.svg"
import Close from "../images/close.svg"
import { Link, useLocation } from "react-router-dom"
import DropDown from "../Components/DropDown"

import {FiShare2} from "react-icons/fi"
import Search from './Search'

const Navigation = () => {
  
  const divEl = useRef();
  const location = useLocation();
  const [ active, setActive ] = useState( false );
  const [ selectedTab, setSelectedTab ] = useState( "home" );
  const [ selection, setSelection ] = useState( null );
  const [ open, setOpen ] = useState( false );


   const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
  }

  useEffect( () => {
    window.addEventListener( "scroll", isActive )
    return () => {
      window.removeEventListener( "scroll", isActive );
    }
  }, [] );

  useEffect( () => {
    const handler = ( event ) => {
      if ( !divEl.current ) {
        return
      }
      if ( !divEl.current.contains(event.target) ) {
     setOpen(false)
   }
      
    }
    document.addEventListener( "click", handler, true );
    return () => {
      document.removeEventListener( "click", handler, true );
    };
  } )
  // to style nav diffrently dependein on the path
  useEffect( () => {
    if ( location.pathname === "/" ) {
      setSelectedTab( "home" )
    }

    else if ( location.pathname === "/sign up" ) {
      setSelectedTab( "sign up" )
    }
    else if ( location.pathname === "/share" ) {
      setSelectedTab( "share" )
    }
  
    
  }, [ location.pathname ] )
  
      useEffect( () => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const handleClose = () => {
    setOpen( !open );
  }
  // for the drop down
  const options = [
    { label: "Dinner ", value: "Dinner " },
    { label: "Breakfast", value: "Breakfast" },
    { label: "Lunch", value: "Lunch" },
    { label: "Snack", value: "Snack" },
  ];

  const handleSelect = ( option ) => {
    setSelection( option.value )
    
  }
  const handleNavigation = () => {
    setOpen( false );
    setSelection( null );
    
  }
  return (
    
    <div className={`sticky top-0 left-0 z-40  ${ active ? "bg-white shadow-lg  text-secondary-200" :"  bg-tertiary-100 shadow-none text-secondary-200" }`}>
      <div className="max-w-[1440px] mx-auto  ">
        
      <div className="w-11/12   mx-auto ">
   
      <div className=" flex justify-between items-center py-2 md:py-3 ">
        
            <Link onClick={ handleNavigation } to="/" className="flex w-full items-start ">
              <div className="flex flex-col items-center">

            <img className=' w-8 sm:w-14' src={ Logo } alt="" />
              <p className="font-pacifico ">Mn Lbla</p>
              </div>
            </Link>
            {/* Start of Navigation For mobile  */}
          <div className="lg:hidden flex  justify-end cursor-pointer">

            <img onClick={ handleClose } src={ Menu } alt="" className=" sm:w-12 w-10" />
            
          </div>
          <div ref={divEl} className={ `lg:hidden fixed transition-all duration-500 flex   justify-center items-center shadow-lg w-10/12 h-screen bg-white ${ open ? " top-0 right-0" : "top-0 right-0 translate-x-full" }` }>

            <img onClick={ handleClose } src={ Close } alt="" className={ `${ open ? "block" : "hidden" } cursor-pointer fixed top-[40px] right-[40px] sm:w-7 w-6 ` } />
            
         
              <div className="flex  flex-col gap-10 font-poppins text-lg text-tertiary-300 tracking-wide">
                 
          <Link onClick={ handleNavigation } className={ `cursor-pointer transition-all duration-300 hover:text-orange-500 ${ selectedTab === 'home' && selection === null ? "text-Primary-Orange-100 font-semibold" : '' } ` } to="/">Home</Link>
              <div className=""><DropDown Close={setOpen}  options={ options } selection={ selection } onSelect={ handleSelect } /></div>
              <Link onClick={ handleNavigation } className={ `group cursor-pointer flex items-center gap-2  ${ selectedTab === 'share' && selection === null ? "text-Primary-Orange-100 font-semibold" : '' } ` } to="/share">
                <FiShare2  className="transition-all duration-300 group-hover:text-orange-500" size={25}/>
                  <p className="transition-all duration-300 group-hover:text-orange-500">Share</p>
              </Link>
                 <Link onClick={ handleNavigation } className={ ` cursor-pointer hover:text-primary-200 ${ selectedTab === 'sign up' && selection === null ? " font-semibold" : '' } ` } to="/sign up">
                <button className='bg-orange-500 transition-all duration-300 hover:bg-Primary-Orange-200 font-poppins tracking-widest border-0 text-white px-6 py-2 rounded-full'>Sign Up</button>
              </Link>
            </div>
          </div>
            {/* End of Navigation For mobile  */ }
        <div className="hidden lg:flex gap-10 w-fullxl:gap-16  lg:items-center font-poppins text-lg text-tertiary-300 tracking-widest">
              <Link onClick={ handleNavigation } className={ `cursor-pointer transition-all duration-300 hover:text-Primary-Orange-100 ${ selectedTab === 'home' && selection === null ? "text-Primary-Orange-100 font-semibold" : '' } ` } to="/">Home</Link>
              <div className=""><DropDown options={ options } selection={ selection } onSelect={ handleSelect } /></div>
              <Link onClick={ handleNavigation } className={ `group cursor-pointer flex items-center gap-2  ${ selectedTab === 'share' && selection === null ? "text-Primary-Orange-100 font-semibold" : '' } ` } to="/share">
                <FiShare2  className="transition-all duration-300 group-hover:text-Primary-Orange-100" size={25}/>
                  <p className="transition-all duration-300 group-hover:text-Primary-Orange-100">Share</p>
              </Link>
            </div>
            
            <div className="hidden  w-full lg:flex items-center gap-5 justify-end">
              <Search/>
               <Link onClick={ handleNavigation } className={ ` cursor-pointer hover:text-primary-200 ${ selectedTab === 'sign up' && selection === null ? " font-semibold" : '' } ` } to="/sign up">
                <button className='bg-orange-600 transition-all border-0 duration-300 hover:bg-orange-200 font-poppins tracking-widest hover:text-black text-white px-6 py-2 rounded-full'>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Navigation