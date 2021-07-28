import NO_IMG from "../assets/NO_IMG.svg";
import NO_IMG_LAND from "../assets/NO_IMG_LAND.svg";

export const APP_KEY = process.env.REACT_APP_TMDB_KEY;

export const request = {
  NO_IMG,
  NO_IMG_LAND,
  IMG_URL: "https://image.tmdb.org/t/p/original",
  fetchNetflixOrignals: `discover/tv?api_key=${APP_KEY}&with_network=213`,
  fetchTrending: `/trending/all/day?api_key=${APP_KEY}`,
  fetchUpcoming: `/movie/upcoming?api_key=${APP_KEY}&language=en-US`,
};
