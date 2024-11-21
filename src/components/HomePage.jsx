import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../Redux/userSlice'
import axios from 'axios'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const apiKey = 'b0514e2d5a9c779370d5d606bdf36d16fc98c91fa3fa4c9c0bfd00b6b2cdd9e0'; // Replace with your Trakt API key

// Trakt API request for trending movies
const fetchMovieVideos = async () => {
 // Replace with your Trakt API key
  const url = `https://api.trakt.tv/movies/alien-romulus-2024
/videos`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': apiKey
      }
    });

    console.log('Status:', response.status);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', response.data); // The video data (such as trailers)
  } catch (error) {
    console.error('Error fetching movie videos:', error);
  }
};
const findMovieHandler = async () => {
  const url = 'https://api.trakt.tv/movies/trending';

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': apiKey
      }
    });

    console.log('Status:', response.status);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', response.data); // The actual movie data
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

// Call the function to fetch trending movies


  const logoutHandler = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/user/logout', {
        withCredentials: true
      })
      if (res.data.sucess) {
        dispatch(setUser(null))
        navigate("/login")
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>

      <div className='bg-black w-fit rounded-xl text-white p-2 mx-auto my-4 ' onClick={findMovieHandler}>find Movie</div>
      <div className='bg-black w-fit rounded-xl text-white p-2 mx-auto my-4 ' onClick={fetchMovieVideos}>find Movie Video</div>
      <div className='bg-blue-600 w-fit rounded-xl text-white p-2 mx-auto' onClick={logoutHandler}>button</div>
    </div>
  )
}

export default HomePage