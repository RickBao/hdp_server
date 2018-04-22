// var request = require('request');
var liveManager = require('./mongo/LiveManager');

function getHdpIdByName(req, res, next) {

    liveManager.inertHdp;

    var channelName = req.query.name;
    console.log('req channel name:', channelName);

    liveManager.getChannelNumByName(channelName, function (channelId) {
        sendOutput(200, res, channelId);
    });


}

function sendOutput(http_code, res, body) {
    res.writeHead(http_code, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    if (body !== "") {
        res.write(JSON.stringify(body, null, 10));
    }
    res.end();
}

module.exports = {
    getHdpIdByName:getHdpIdByName
};