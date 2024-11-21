import axios from 'axios'
import React from 'react'
import {useDispatch} from 'react-redux'
import { POPULARMOVIES, TOPRATEDMOVIES, options } from '../utils/utils'
import {  setTopRated } from '../Redux/movieSlice'

    export const usegetTopRatedMovie = async () => {
    const dispatch = useDispatch()
        try {
            const res = await axios.get(TOPRATEDMOVIES, options)
            // console.log(res.data.results);
            if(res.data.results){
                dispatch(setTopRated(res.data.results))
            }

        } catch (error) {
            console.log(error);

        }
    }





