import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate();

const submitHandler = async (e) => {
        e.preventDefault();
        const user={
         email : email,
         password : password
        } 

        console.log(user);
    
    try {
const response = await axios.post('http://localhost:4000/users/login', user)

  if (response.status === 200) {
    const data = response.data
    console.log("Login successful:", data);
    localStorage.setItem('token', data.token)
    navigate('/')
  }
} catch (error) {
  console.error("Login error:", error.response?.data || error.message)
}


    setEmail('')
    setPassword('')

    }
  return (
    <div className=' flex justify-center items-center h-screen'>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }} className='border-2 border-gray-500 h-[40%] w-[80%] flex flex-col justify-center items-center gap-4 rounded-lg shadow-lg md:w-[30%] md:h-[60%]'>
            <p className='text-2xl font-semibold '>Login</p>
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className='rounded-md p-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>
            <p className='text-sm'>Don't have an account? <a href="/signup" className='text-blue-600'>Sign Up</a></p>
        </form>
    </div>
  )
}

export default Login