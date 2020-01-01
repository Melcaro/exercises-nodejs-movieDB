const router = require('express').Router();
const ActorCtrl = require('../controllers/ActorController');

router.get('/:actorID', ActorCtrl.fetchActorInfosByID);

router.get('/:actorID/credits', ActorCtrl.fetchActorFilmography);

module.exports = router;
