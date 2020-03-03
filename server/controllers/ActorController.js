const ActorStore = require('../stores/ActorStore');

const fetchActorInfosByID = async (req, res) => {
  const actorID = req.params.actorID;
  try {
    const { data: actorInfos } = await ActorStore.getActorInfosByID(actorID);
    return res.send(actorInfos);
  } catch (e) {
    console.error(e);
  }
};

const fetchActorFilmography = async (req, res) => {
  const actorID = req.params.actorID;
  try {
    const {
      data: { cast: actorFilmography },
    } = await ActorStore.getActorFilmography(actorID);
    res.send(actorFilmography);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { fetchActorInfosByID, fetchActorFilmography };
