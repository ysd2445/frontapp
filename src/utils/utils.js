export const NOWSTREAMINGMOVIES="https://api.themoviedb.org/3/movie/now_playing"
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGJlZjViMDUzNWE3OGYwMjllMTQ0NDE5NTQ4MjM4MCIsInN1YiI6IjY1MDRhMjNkNTllOGE5MDExZWNhYTVjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTBaAb_2NPRGPr2HeGszyFDP-onLh-fiL7fzmnOFZUg'
    }
  };
export const UPCOMINGMOVIES="https://api.themoviedb.org/3/movie/upcoming"
export const TOPRATEDMOVIES="https://api.themoviedb.org/3/movie/top_rated"
export const POPULARMOVIES="https://api.themoviedb.org/3/movie/popular"
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const SEARCHURL = "https://api.themoviedb.org/3/search/movie?"