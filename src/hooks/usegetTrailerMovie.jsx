import axios from "axios";
import { useDispatch } from "react-redux";
import { setTrailer } from "../Redux/movieSlice";
import { options } from "../utils/utils";

export const usegetTrailerMovie = () => {
  const dispatch = useDispatch();

  const fetchTrailer = async (movieId) => {
   console.log(movieId);
   
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options
      );

      // Find the first YouTube video (can be trailer or other clip)
      const youtubeClip = res.data.results.find((video) => video.site === "YouTube");
// console.log(youtubeClip);

      if (youtubeClip) {
        dispatch(setTrailer(youtubeClip)); // Store video in Redux
      } else {
        console.error("No YouTube videos found for this movie.");
        dispatch(setTrailer(null)); // Reset trailer state if no video is found
      }
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };

  return { fetchTrailer }; // Return the function to use in the component
};
