var config = require('./liveConfig');

function getLiveSource(req, res, next) {

    sendOutput(200, res, config.livebranch);
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
    getLiveSource:getLiveSource
}