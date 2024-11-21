import axios from 'axios'
import React from 'react'
import {useDispatch} from 'react-redux'
import { POPULARMOVIES, options } from '../utils/utils'
import { setnowPlayingMovie, setPopularMovie } from '../Redux/movieSlice'

    export const usegetPopularMovie = async () => {
    const dispatch = useDispatch()
        try {
            const res = await axios.get(POPULARMOVIES, options)
            // console.log(res.data.results);
            if(res.data.results){
                dispatch(setPopularMovie(res.data.results))
            }

        } catch (error) {
            console.log(error);

        }
    }





