const router = require('express').Router();
const MoviesCtrl = require('../controllers/MoviesController');

router.get('/', MoviesCtrl.fetchLatestsMovies);

router.get('/:movieId', MoviesCtrl.fetchMovieInfos);

router.get('/:movieId/credits', MoviesCtrl.fetchMovieCast);

module.exports = router;
