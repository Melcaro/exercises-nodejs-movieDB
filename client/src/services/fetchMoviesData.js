import axios from 'axios';

export const getLatestsMovies = async () => {
  try {
    return await axios.get('/movies');
  } catch (e) {
    console.error('An error happened');
  }
};

export const getMovieInfos = async movieID => {
  try {
    return await axios.get(`/movies/${movieID}`);
  } catch (e) {
    console.error('An error happened');
  }
};

export const getMovieCast = async movieID => {
  try {
    return await axios.get(`/movies/${movieID}/credits`);
  } catch (e) {
    console.error('An error happened');
  }
};

export const getActorInfosByID = async actorID => {
  try {
    return await axios.get(`/actor/${actorID}`);
  } catch (e) {
    console.error('An error happened');
  }
};

export const getActorFilmography = async actorID => {
  try {
    return await axios.get(`/actor/${actorID}/credits`);
  } catch (e) {
    console.error('An error happened');
  }
};
