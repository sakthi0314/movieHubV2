import axios from "axios";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3",
});

export default instance;
