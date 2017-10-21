'use strict';

var redis = require('../lib/redis');
/*
save badges to database
@param {Array} badges
@param {Function} callback
*/
var exports ={};
exports.save = function(badges, callback){
    //recursively handling multiple badges
    if(!badges.length) return(callback(null, null));
    
    var badge = badges.pop();
    redis.lpush('badges', JSON.stringify(badge), function(err){
        if(err)
            return callback(err, null);
        
        //recursive call to save method
        exports.save(badges, callback);
    });
};
module.exports = exports;