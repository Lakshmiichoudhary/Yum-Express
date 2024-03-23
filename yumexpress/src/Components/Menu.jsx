import React, { useEffect, useState } from 'react';
import { cusines, cusinesApi } from '../Utils/Constants';
import SearchIcon from '@mui/icons-material/Search';
import RestaurentCards from './RestaurentCards';
import { Shimmer } from '../Utils/Shimmer';

const Menu = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filtredRes, setFiltredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(cusinesApi);
      const json = await response.json();
      console.log(json);
      const data = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantData(data);
      setFiltredRes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilter = () => {
    const filteredResto = restaurantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltredRes(filteredResto);
  };

  return (
    <div className='mt-20 absolute lg:w-screen'>
      <div className='rounded-full lg:ml-44 p-2 flex overflow-x-auto md:overflow-x-visible'>
        {cusines.map((item) => (
          <img className='p-2 lg:w-44 lg:h-44 w-32 h-32 rounded-full' key={item.id} src={item.img} />
        ))}
      </div>
      <div className='mt-7 bg-slate-300 p-5'>
        <input
          className='p-2 lg:ml-20 rounded-lg lg:w-80'
          type='text'
          value={searchText}
          placeholder='Search'
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <SearchIcon
          className='ml-2 mb-2'
          onClick={() => {
            handleFilter();
          }}
        />
      </div>
      <div className='lg:p-2 flex flex-wrap lg:mx-10'>
        {filtredRes && filtredRes.length > 0 ? (
          filtredRes.map((restaurant, index) => (
            <RestaurentCards
              key={index}
              name={restaurant.info.name}
              avgRatingString={restaurant.info.avgRatingString}
              costForTwo={restaurant.info.costForTwo}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
            />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Menu;
