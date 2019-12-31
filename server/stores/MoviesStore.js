const axios = require('axios');
const auth = require('./../services/auth');

const URL = 'https://api.themoviedb.org/3';

const getLatestsMovies = async () => {
  try {
    return await axios.get(`${URL}/discover/movie`, {
      params: { api_key: auth.api_key },
    });
  } catch (e) {
    return e;
  }
};

module.exports = { getLatestsMovies };
