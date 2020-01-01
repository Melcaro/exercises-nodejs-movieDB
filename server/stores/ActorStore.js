const axios = require('axios');
const auth = require('../services/auth');

const URL = 'https://api.themoviedb.org/3';

const getActorInfosByID = async actorID => {
  try {
    return await axios.get(`${URL}/person/${actorID}`, {
      params: { api_key: auth.api_key },
    });
  } catch (e) {
    return e;
  }
};

const getActorFilmography = async actorID => {
  try {
    return await axios.get(`${URL}/person/${actorID}/movie_credits`, {
      params: { api_key: auth.api_key },
    });
  } catch (e) {
    return e;
  }
};

module.exports = { getActorInfosByID, getActorFilmography };
