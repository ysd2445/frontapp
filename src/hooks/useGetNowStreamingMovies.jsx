import axios from 'axios'
import React from 'react'
import {useDispatch} from 'react-redux'
import { NOWSTREAMINGMOVIES, options } from '../utils/utils'
import { setnowPlayingMovie } from '../Redux/movieSlice'

    export const useGetNowStreamingMovies = async () => {
    const dispatch = useDispatch()
        try {
            const res = await axios.get(NOWSTREAMINGMOVIES, options)
            // console.log(res.data.results);
            if(res.data.results){
                dispatch(setnowPlayingMovie(res.data.results))
            }

        } catch (error) {
            console.log(error);

        }
    }





