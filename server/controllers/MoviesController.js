const MoviesStore = require('../stores/MoviesStore');

const fetchLatestsMovies = async (req, res) => {
  try {
    const { data: moviesList } = await MoviesStore.getLatestsMovies();
    return res.send(moviesList);
  } catch (e) {
    console.error(e);
  }
};

const fetchMovieInfos = async (req, res) => {
  const movieID = req.params.movieId;
  try {
    const { data: movieInfos } = await MoviesStore.getMovieInfoByID(movieID);
    return res.send(movieInfos);
  } catch (e) {
    console.error(e);
  }
};

const fetchMovieCast = async (req, res) => {
  const movieID = req.params.movieId;
  try {
    const { data: movieCast } = await MoviesStore.getMovieCast(movieID);
    return res.send(movieCast);
  } catch (e) {
    console.error(e);
  }
};
module.exports = { fetchLatestsMovies, fetchMovieInfos, fetchMovieCast };
