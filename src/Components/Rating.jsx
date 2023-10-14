import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center px-9 mt-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          onClick={() => handleRatingClick(index)}
          className="text-xl transition-colors w-[25px] px-2 border-0"
        >
          {index <= rating ? <AiFillStar className="text-yellow-400" size={18} /> :
           <AiFillStar className="text-gray-300" size={18}/>}
        </button>)
      )}
    </div>
  );
};

export default Rating;
