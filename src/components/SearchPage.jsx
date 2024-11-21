import React, { useState } from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import axios from 'axios';
import { options, SEARCHURL } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovie } from '../Redux/serachSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchMovie = useSelector((store) => store.search); // Redux state
  const [text, setText] = useState(''); // Local state for search input

  // Handler for search functionality
  const serachMovieHandler = async () => {
    try {
      const res = await axios.get(`${SEARCHURL}query=${text}`, options);
      if (res.data.results) {
        dispatch(setSearchMovie(res.data.results)); // Update Redux state with search results
      }
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Search Bar */}
        <div className="flex gap-3 mt-20 mx-auto w-1/2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-1/2 p-2 outline-none border-[1px] border-gray-500 rounded-md"
            type="text"
            placeholder="Search Movie"
          />
          <button
            className="bg-red-600 text-white rounded-md p-2"
            onClick={serachMovieHandler}
          >
            Search
          </button>
        </div>

        {/* Movie Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 mt-10"
          style={{  overflowY: 'auto' }} // Limit height and allow vertical scroll
        >
          {
            searchMovie.search?.map(movie=>{
              console.log(movie);
              
              if(movie.backdrop_path===null){
                return null
              }else{

              
              return(
               
                <MovieCard key={movie.id} search={true} movie={movie} />
              )
            }
            })
          }
        </div>
      </div>
    </>
  );
};

export default SearchPage;
