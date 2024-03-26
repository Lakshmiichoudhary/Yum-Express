import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, emptyCart } from '../Store/CartSlice';
import { imagUrl } from '../Utils/Constants';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className='absolute'>
      <div className='mt-28 font-bold text-2xl text-center md:px-96'>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <h2>Cart Items:</h2>
            {cartItems.map((item,id) => (
              <div key={id} className='flex items-center mt-4 bg-slate-300 md:p-6 shadow-2xl from-black'>
                <img className='p-2 md:w-28 md:h-28 w-20 h-20 rounded-2xl'
                  src={imagUrl+ item.cloudinaryImageId} 
                  alt={item.name} />
                <div className='flex'>
                  <div className='p-2'>
                    <p>{item.name}</p>
                    <p className='mt-2'>Price: {item.costForTwo}</p>
                  </div>  
                  <div>
                  <button onClick={() => handleRemoveItem(item.id)} 
                  className='p-2 bg-red-700 mt-4 mx-4 text-white font-thin rounded-md'>
                    Remove
                  </button>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={handleEmptyCart}
            className='my-6 p-3 bg-red-700 rounded-md text-white'>
              Empty Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
