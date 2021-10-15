const axios = require('axios').default;
var express = require('express');
var router = express.Router();
var { API } = require('../config'); 

/* GET users listing. */
router.post('/', async function(req, res, next) {
  const city = req.body.search || "Santo Domingo";
  const response = await axios.get(encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`));
  res.send(response.data);
});

module.exports = router;
