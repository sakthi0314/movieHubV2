export const APP_KEY = "10221c5cc680130fcc056d961d3bc0f9";

export const request = {
  NO_IMG:
    "https://www.csa.iisc.ac.in/newweb/wp-content/uploads/2019/11/image-not-available.jpg",
  IMG_URL: "https://image.tmdb.org/t/p/original",
  fetchNetflixOrignals: `discover/tv?api_key=${APP_KEY}&with_network=213`,
  fetchtype: `?api_key=${APP_KEY}&language=en-US`,
  fetchTrending: `/trending/all/day?api_key=${APP_KEY}`,
  fetchUpcoming: `/movie/upcoming?api_key=${APP_KEY}&language=en-US`,
  fetchAction: `/discover/movie?/api_key=${APP_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?/api_key=${APP_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?/api_key=${APP_KEY}&with_genres=27`,
  fetchRomatic: `/discover/movie?/api_key=${APP_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?/api_key=${APP_KEY}&with_genres=99`,
};
