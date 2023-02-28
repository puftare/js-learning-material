import { topMovies } from "./moduleB.js";

var checkMovie = (movieName) => {
  return topMovies.includes(movieName);
};

export { checkMovie };
