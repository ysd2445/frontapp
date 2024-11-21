// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { setUser } from '../Redux/userSlice';
const LoginPage =  () => {
  
    const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const dispatch = useDispatch()
  const handleLogin = async  (e) =>{
    e.preventDefault();
    setEmail("")
    setPassword("")
    // Logic to authenticate user
    try {
        const res = await axios.post(`backmovie-ecru.vercel.app/api/user/login`,{email,password}, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            },
        )
        console.log(res);
        if(res.data.sucess){
          dispatch(setUser(res.data.user))
            navigate("/browse")
        }
        
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Instagram</h2>
        
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-500">Don’t have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
