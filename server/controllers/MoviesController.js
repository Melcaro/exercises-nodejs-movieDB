const { getLatestsMovies } = require('../stores/MoviesStore');

const fetchLatestsMovies = async (req, res) => {
  try {
    const { data: moviesList } = await getLatestsMovies();
    return res.send(moviesList);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchLatestsMovies };
