import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown } from "react-icons/go"
import { Link } from 'react-router-dom';
const DropDown = ( { options, selection, onSelect} ) => {
  const [ isOpen, setIsOpen ] = useState( false );
  
  const divEl = useRef();
  useEffect( () => {
    const handler = ( event ) => {
      if ( !divEl.current ) {
        return
      }
      if ( !divEl.current.contains(event.target) ) {
     setIsOpen(false)
   }
      
    }
    document.addEventListener( "click", handler, true );
    return () => {
      document.removeEventListener( "click", handler, true );
    };
  })
  const handleClick = () => {
    setIsOpen( !isOpen );

  }
  const handleOptionClick = (option) => {
    setIsOpen( false );
    
    onSelect( option );
    
  }

const renderedOptions = options.map( ( option ) => {
      
  return ( <Link to={`/${option.value}`} className='pb-2 border-b-[1px]  border-gray-200 text-lg font-poppins transition-all duration-300 hover:text-orange-500' onClick={()=> handleOptionClick(option) } key={ option.value }>{ option.label }</Link> )
  } ); 
      
 

  return (
    <div ref={divEl} className='cursor-pointer font-poppins '>
      {/* if selection is null it will print Select.... if it not null it wil print selection.label */}
      <div onClick={ handleClick } className='group relative flex items-end justify-between w-36 gap-4 '>
        <div className={`${selection ? "font-semibold text-Primary-Orange-100" :""} transition-all duration-300 group-hover:text-orange-500  font-poppins capitalize`}>{ selection ? selection : "Category" }</div>
        <GoChevronDown className={`${selection ? "text-Primary-Orange-100" :""} transition-all duration-300 group-hover:text-Primary-Orange-100`}  size={25} />
      </div>
      { isOpen && <Link to={`/${selection}`} className=' absolute text-secondary-100 w-36 flex flex-col gap-2 z-50 shadow-lg bg-tertiary-100 shadow-primary-200 px-3  py-3 rounded-b-md '>{ renderedOptions } </Link> }
      
    </div>
  )
}

export default DropDown