import React from 'react';
import { imagUrl } from '../Utils/Constants';

const RestaurentCards = ({ name, avgRatingString, costForTwo, cloudinaryImageId }) => {
  
    return (
      <div className="p-3 lg:ml-16 ml-12 rounded-lg shadow-xl from-black mt-4">
        <img className='p-2 lg:w-80 lg:h-64 w-60 h-52 rounded-2xl'
        src={imagUrl+cloudinaryImageId} 
        alt={name} />
        <div className="p-2">
          <h2 className='font-bold w-56'>{name}</h2>
          <p>Rating: {avgRatingString}</p>
          <p>Cost for two: {costForTwo}</p>
          <button className='p-2 mt-2 rounded-lg bg-emerald-800 text-white'>
            +Add
          </button>
        </div>
      </div>
    );
  };

export default RestaurentCards;
