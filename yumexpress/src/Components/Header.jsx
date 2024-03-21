import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/Firebase';
import { useDispatch, useSelector } from "react-redux"
import { adduser, removeUser } from '../Store/AuthSlice';
import { Link, useNavigate} from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const store = useSelector(store => store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email} = user;
        dispatch(adduser({uid:uid,email:email}))
        navigate("/home")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => subscribe()
  },[])

  return (
    <div className='lg:p-3 md:p-3  absolute z-10 bg-teal-800 w-full lg:flex justify-between md:flex md:justify-between'>
      <div className='lg:ml-16 ml-5'>
        <h1 className='text-3xl font-bold text-white p-2'>Yum Express</h1>
      </div>
      {!store && <div className='p-2 text-white lg:mr-20 mr-2 md:mr-10 '>
        <button className='p-2 px-5 bg-orange-700 rounded-md font-bold'>Login</button>
      </div>}
      {store && <div className='lg:p-2 text-white font-bold mt-2 mb-2 lg:mr-20 md:mr-10 '>
        <Link to="/home" className='p-3 text-orange-700'>
          Home
        </Link>
        <Link to="/home" className='p-3'>
          About
        </Link>
        <Link to="/home" className='p-3'>
          Contact
        </Link>
        <Link to="/cart" className='p-3'>
          Cart
        </Link>
        <Link to="/home" className='p-3' onClick={handleSignout}>
          Logout
        </Link>
      </div>}
    </div>
  )
}

export default Header
