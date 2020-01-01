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
