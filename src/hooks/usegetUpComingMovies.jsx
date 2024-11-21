import axios from 'axios'
import React from 'react'
import {useDispatch} from 'react-redux'
import { POPULARMOVIES, UPCOMINGMOVIES, options } from '../utils/utils'
import { setnowPlayingMovie, setPopularMovie, setUpComingMovie } from '../Redux/movieSlice'

    export const usegetUpcomingMovie= async () => {
    const dispatch = useDispatch()
        try {
            const res = await axios.get(UPCOMINGMOVIES, options)
            // console.log(res.data.results);
            if(res.data.results){
                dispatch(setUpComingMovie(res.data.results))
            }

        } catch (error) {
            console.log(error);

        }
    }





