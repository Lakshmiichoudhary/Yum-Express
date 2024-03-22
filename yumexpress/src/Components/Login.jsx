import React, { useRef, useState } from 'react';
import { bg } from '../Utils/Constants';
import Header from './Header';
import { validation } from '../Utils/validation';
import { auth } from '../Utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [isLogin,setIsLogin] = useState(true)
  const [isError,setIsError] = useState("")
  const email = useRef(null)
  const password = useRef(null)
  const ConfirmPassword = useRef(null)

  const handleSubmit = () => {
    const message = validation(email?.current?.value,password?.current?.value,ConfirmPassword?.current?.value)
    setIsError(message)
    if(message) return

    if(!isLogin){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = "email-already-in-use";
          setIsError(errorCode)
      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = "Entred Wrong credential";
          setIsError(errorCode)
        });
    }
  }

  const handleForm = () => {
      setIsLogin(!isLogin)
      setIsError("")
  }

  return (
    <div>
      <Header />
      <div className='relative'>
        <img className='h-screen w-screen object-cover' src={bg} alt='bg' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='p-4'>
            <form className='p-3 bg-emerald-800 text-center text-white font-bold rounded-md bg-opacity-30'
              onSubmit={(e)=>e.preventDefault()}>
              <h1 className='p-2 text-3xl'>
               {isLogin ? "Login" : "Signup" }
              </h1>
              <div>
                <input className='p-3 mt-7 text-gray-900 opacity-60 rounded-md' 
                  type='email'
                  ref={email} 
                  placeholder='Email' />
              </div>
              <div>
                <input className='p-3 mt-4 text-gray-900 opacity-60 rounded-md' 
                  type='password'
                  ref={password} 
                  placeholder='*******' />
              </div>
              {!isLogin && <div>
                <input className='p-3 mt-4 text-gray-900 opacity-60 rounded-md' 
                  type='password'
                  ref={ConfirmPassword} 
                  placeholder='Confirm Password' />
              </div>}
              <div className='p-2 text-red-600'>
                <p>{isError}</p>
              </div>
              <div className='p-3 w-60 lg:mx-10 font-black m-4 mb-7 bg-emerald-800 rounded-md cursor-pointer'>
                <button onClick={handleSubmit}>
                  {isLogin ? "Login" : "Signup"}
                </button>
              </div>
              <p className='pb-3 cursor-pointer' onClick={handleForm}>
                {isLogin ? "Don't have an account yet? Join now" : "Been here before? Login now"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
