const moviesRouter = require('./routes/MoviesRouter');
const actorRouter = require('./routes/ActorRouter');

const routes = app => {
  app.use('/movies', moviesRouter);
  app.use('/actor', actorRouter);
};

module.exports = routes;
