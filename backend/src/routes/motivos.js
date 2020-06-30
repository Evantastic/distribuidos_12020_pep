const Router = require('express-promise-router');
const data = require('../data/motivos.json')

const router = new Router();

module.exports = router;

router.get('/', (req, res) => {
  res.status(200).send(data);
});
