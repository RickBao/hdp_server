var Live = require('./Live');
var hdp = require('../../resources/hdp');


function insertHdp() {

    var query = {channelName: '北京卫视'};
    Live.find(query, function (err, res) {
        console.log('query insert hdp: ', res.length);
        if (res.length === 0) {

            Live.insertMany(hdp, function (err, docs) {
                if(err) console.log(err);
                console.log('保存成功：' + docs);
            })
        }
    });
}

function getChannelNumByName(name, callback) {

    var query = {channelName: name};

    Live.find(query, function (err, res) {
        if (err) {
            return console.log('get channel id by name err:', err);
        } else {
            callback(res[0].channelNum);
        }
    });
}


module.exports = {
    inertHdp:insertHdp,
    getChannelNumByName:getChannelNumByName
};
