import React from 'react'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const trailerMovie = useSelector(state=>state.movies)
    console.log(trailerMovie.trailer);
    
  return (
    <>
    <div className='overflow-hidden z-10 mb-5'>
<iframe className=' absolute top-0 z-0 w-full h-screen object-cover' src={`https://www.youtube.com/embed/${trailerMovie.trailer?.key}?autoplay=1&mute=1`} title="YouTube video player" allow='autoplay'  allowFullScreen></iframe>
</div>
<div className='absolute top-52 p-4  text-white'>
    <h3 className='font-bold text-2xl p-2 '>{trailerMovie.trailer?.name}</h3>
    {/* <p className='w-1/2 text-sm p-2 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque saepe explicabo.</p> */}
    <div className='p-2 '>

    <button className='bg-gray-400 py-2 px-5 rounded-md '>info..</button>
    <button  className='bg-red-500 py-2 px-5 rounded-md mx-3 '>Play</button>
    </div>
</div>
   
    </>
  )
}

export default MainContainer