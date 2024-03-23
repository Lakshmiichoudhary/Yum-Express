import React, { useEffect, useState } from 'react';
import { cusines, cusinesApi, } from '../Utils/Constants';
import SearchIcon from '@mui/icons-material/Search';
import RestaurentCards from './RestaurentCards';
import { Shimmer } from '../Utils/Shimmer';

const Menu = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [search,setSearch] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(cusinesApi);
      const json = await response.json();
      console.log(json);
      setRestaurantData(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='mt-20 absolute lg:w-screen'>
      <div className='rounded-full lg:ml-44 p-2 flex overflow-x-auto md:overflow-x-visible'>
        {cusines.map(item => (
          <img className='p-2 lg:w-44 lg:h-44 w-32 h-32 rounded-full' key={item.id} src={item.img} /> 
        ))}
      </div> 
      <div className='mt-7 bg-slate-300 p-5'>
        <input className='p-2 lg:ml-20 rounded-lg lg:w-80' type='text' value={setSearch} placeholder='Search' />
        <SearchIcon className='ml-2 mb-2' />
      </div> 
      <div className='lg:p-2 flex flex-wrap lg:mx-10'>
      {restaurantData.length === 0 ? <Shimmer/> : restaurantData.map((restaurant, index) => (
        <RestaurentCards
        key={index} 
        name={restaurant.info.name}
        avgRatingString={restaurant.info.avgRatingString}
        costForTwo={restaurant.info.costForTwo}
        cloudinaryImageId={restaurant.info.cloudinaryImageId} />
      ))}
      </div>
    </div>
  );
}

export default Menu;
