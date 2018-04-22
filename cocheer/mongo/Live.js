var mongoose = require('./Schema');
var Schema = mongoose.Schema;

var LiveSchema = new Schema({
   channelNum: {type: String},
   channelName: {type: String}
});

module.exports = mongoose.model('Live', LiveSchema);