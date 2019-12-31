const router = require('express').Router();
const MoviesCtrl = require('../controllers/MoviesController');

router.get('/', MoviesCtrl.fetchLatestsMovies);

module.exports = router;
