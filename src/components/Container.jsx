import React from 'react';
import MovieCard from './MovieCard';
import { useGetNowStreamingMovies } from '../hooks/useGetNowStreamingMovies';
import { useSelector } from 'react-redux';

const Container = () => {
  const movies = useSelector(store=>store.movies)
  // console.log(movies.nowPlaying);
  
    
  return (
    <div
      className="bg-black text-white absolute top-[80vh] left-0 w-full z-50"
      style={{ height: 'fit-content' }}
    >
      {/* Section 1 */}
      <div className="font-semibold p-1 text-lg mt-10">
        <h3 className="px-5 text-2xl font-bold">Now Streaming Movies</h3>
        <div className="flex gap-5 mx-3 p-3 overflow-x-auto flex-nowrap no-scrollbar">
          {
           movies?.nowPlaying?.map(movie=>{
            //  console.log(movie);
             
              return(

                
              <MovieCard movie={movie} key={movie.id}  posterPath={movie.poster_path} />
              )
            })
          }
        
        </div>
      </div>

      {/* Section 2 */}
      <div className="font-semibold p-1 text-lg">
        <h3 className="px-5 text-2xl font-bold">UpComing Movies</h3>
        <div className="flex gap-5 mx-3 p-3 overflow-x-auto flex-nowrap no-scrollbar">
        {
           movies?.upComing?.map(movie=>{
            //  console.log(movie);
             
              return(

                
              <MovieCard movie={movie} key={movie.id}  posterPath={movie.poster_path} />
              )
            })
          }
          
        </div>
      </div>
      <div className="font-semibold p-1 text-lg">
        <h3 className="px-5 text-2xl font-bold">TopRatedMovies</h3>
        <div className="flex gap-5 mx-3 p-3 overflow-x-auto flex-nowrap no-scrollbar">
        {
           movies?.toprated?.map(movie=>{
            //  console.log(movie);
             
              return(

                
              <MovieCard movie={movie} key={movie.id}  posterPath={movie.poster_path} />
              )
            })
          }
          
        </div>
      </div>
      <div className="font-semibold p-1 text-lg">
        <h3 className="px-5 text-2xl font-bold">Popular Movies</h3>
        <div className="flex gap-5 mx-3 p-3 overflow-x-auto flex-nowrap no-scrollbar">
        {
           movies?.popular?.map(movie=>{
            //  console.log(movie);
             
              return(

                
              <MovieCard movie={movie} key={movie.id}  posterPath={movie.poster_path} />
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
};

export default Container;
