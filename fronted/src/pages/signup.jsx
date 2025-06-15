import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const signup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [name, setname] = useState('')
  const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const user={
         name :name,
         email : email,
         password : password
        }

        console.log(user);
    // const response = await axios.post('http://localhost:4000/users/signup', user)

    // if (response.status === 201) {
    //   const data = response.data
    //   //setUser(data.user)
    //   localStorage.setItem('token', data.token)
    // //   navigate('/')
    // }
    try {
  const response = await axios.post('http://localhost:4000/users/signup', user)

  if (response.status === 201) {
    const data = response.data
    localStorage.setItem('token', data.token)
    navigate('/')
  }
} catch (error) {
  console.error("Signup error:", error.response?.data || error.message)
}


    setEmail('')
    setname('')
    setPassword('')

    }

  return (
    <div className=' flex justify-center items-center h-screen'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='border-2 border-gray-500 h-[40%] w-[80%] flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg md:w-[30%] md:h-[60%]'>
            <p className='text-2xl font-semibold '>Signup</p>
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='Enter your Name'   />
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email'  />
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' value={password} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder='Enter your password' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign Up</button>
            <p className='text-sm'>Already have an account? <a href="/login" className='text-blue-600'>Login</a></p>
        </form>
    </div>
  )
}

export default signup