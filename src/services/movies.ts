import axios from "axios";

export const getMovies = async (category: string) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${category}`,
  );

  return res.data.Search || [];
};

export const getMovieDetails = async (imdbID: string) => {
  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${imdbID}&plot=full`,
  );

  return res.data;
};
