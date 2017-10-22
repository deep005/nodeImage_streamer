'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

socket.bind(8001);
/*
send a badge to the publish socket
not creating channels on the pub server
*/
var exports = {};
exports.send = function(badge){
    socket.send(badge);
};
module.exports = exports;