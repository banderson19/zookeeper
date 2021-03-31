const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeper = require('../apiRoutes/zookeeperRoutes')

router.use(animalRoutes);
router.use(zookeeper);

module.exports = router;