// src/pages/SignUpPage.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUpPage = () => {

  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
  const handleSignUp = async(e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`backmovie-ecru.vercel.app/api/user/signup`,{username,email,password}, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            },
        )
        console.log(res);
        if(res.data.sucess){
            navigate("/login")
        }
        
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Instagram</h2>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500">Have an account? <Link to="/login" className="text-blue-500">Log in</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
