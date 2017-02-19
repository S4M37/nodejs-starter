
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Model   = new Schema({
    clientId: String,
    clientNamde: String,
});

module.exports = mongoose.model('Model', Model);