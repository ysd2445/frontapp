import React from 'react'
import Home from './Home'
import Container from './Container'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import { useGetNowStreamingMovies } from '../hooks/useGetNowStreamingMovies'
import { usegetPopularMovie } from '../hooks/useGetPopularMovies'
import { usegetTopRatedMovie } from '../hooks/usegetTopRatedMovie'
import { usegetUpcomingMovie } from '../hooks/usegetUpComingMovies'
import { usegetTrailerMovie } from '../hooks/usegetTrailerMovie'

const Browse = () => {
    const {user} = useSelector(store=>store.auth)
    // console.log(user);
    
useGetNowStreamingMovies()
usegetPopularMovie()
usegetTopRatedMovie()
usegetUpcomingMovie()

  return (

  <>
  
   <Home/>
     <MainContainer/>
     <Container/>
  
  
  </>
  )
}

export default Browse