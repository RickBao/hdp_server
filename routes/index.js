var express = require('express');
var router = express.Router();
var getChannelId = require('../cocheer/getChannelId');
var getLiveBranch = require('../cocheer/getLiveBranch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/live/hdp/getchannel', getChannelId.getHdpIdByName);
router.get('/live/resource', getLiveBranch.getLiveSource);

module.exports = router;
