import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className='inline-flex'>
      <input
        className='outline-orange-400 rounded-xl font-poppins w-[190px] px-2'
        type="text"
        placeholder="Search meal by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link to={`/detail?name=${searchTerm}`}> <button className='border-0 '><BsSearch size={20}/></button></Link>
      </div>
    </div>
  );
}

export default Search;