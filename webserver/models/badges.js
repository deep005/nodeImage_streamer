'use strict'

/*
get bbadges from pubsub server
@param {Function} callback
*/

var request = require('request');
exports.get = function(callback){
    request('http://localhost:8000/badges', function(err, response, body){
        callback(err, JSON.parse(body));
    });
};