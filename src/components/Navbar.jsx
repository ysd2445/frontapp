import axios from 'axios'
import React, { Profiler, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../Redux/userSlice'
import {setnowPlayingMovie } from '../Redux/movieSlice'
import {setPopularMovie } from '../Redux/movieSlice'
import { setTopRated} from '../Redux/movieSlice'
import {setUpComingMovie } from '../Redux/movieSlice'


const Navbar = () => {
    const user = useSelector(store=>store.auth.user)
    const movies = useSelector(store=>store.movies)
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const [isToggled, setIsToggled] = useState(false);
   
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
  
      if (isToggled) {
        // If toggled to true, navigate to the search page
        navigate("/search");
      } else {
        // If toggled to false, navigate to the browse page
        navigate("/browse");
      }
    };
    const logoutHandler= async()=>{
        try {
            const res = await axios.get('http://localhost:3000/api/user/logout',{
                withCredentials:true
            })
            if(res.data.sucess){
                console.log(res.data.message);
                
dispatch(setUser(null))
dispatch(setnowPlayingMovie(null))
dispatch(setPopularMovie(null))
dispatch(setTopRated(null))
dispatch(setUpComingMovie(null))
navigate("/login")
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='absolute top-0 w-[98.5vw] flex z-10 bg-black  justify-between items-center '>
        <div className='text-2xl font-bold text-white px-5 '>

        MovieZillah
        </div>
        <div className='p-2 flex gap-2 '>
            <button className='bg-blue-500 font-medium flex items-center justify-center gap-2   outline-none rounded-md px-4   '><FaRegUserCircle size={20}/>
            {user?.username}</button>
            <button onClick={handleToggle} className='bg-blue-400 font-medium outline-none rounded-md px-4  w-full '>  {isToggled ? "Home" : "Search"}</button>
            <button onClick={logoutHandler} className='bg-red-600 font-medium outline-none rounded-md px-4  w-full py-2  '>Logout</button>
        </div>

    </div>
  )
}

export default Navbar