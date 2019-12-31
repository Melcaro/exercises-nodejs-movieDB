import axios from 'axios';

export const getLatestsMovies = async () => {
  try {
    return await axios.get('/movies');
  } catch (e) {
    console.error('An error happened');
  }
};
