'use strict';

var redis = require('../lib/redis');
var broadcast = require('../lib/broadcast');
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

//send out badges to the broadcaster
/*
 @param {Array} badges
 @param {Function} callback
 */
exports.send = function(badges, callback){
    badges.forEach(function(badge){
        broadcast.send(badge);
    });
    callback(null, null);
};


/*
Get 10 badges from redis
@param {Function} callback
*/
exports.get = function(callback){
    redis.lrange('badges', 0, -1, function(err, data){
        //not calling the cb directly coz incoming data is string

        if(err) return callback(err, null);
        data = data.map(JSON.parse);
        callback(null, data);
    });
};

//trim the redis list to 10 entries
exports.trim = function(){
  //redis.trim('badges', 0, 9);
};
module.exports = exports;