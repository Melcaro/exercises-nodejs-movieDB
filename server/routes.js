const moviesRouter = require('./routes/MoviesRouter');

const routes = app => {
  app.use('/movies', moviesRouter);
};

module.exports = routes;
