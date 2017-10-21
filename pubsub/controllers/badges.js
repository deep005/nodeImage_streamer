'use strict';

var _ = require('underscore');
var model = require('../models/badges');
var exports = {};

//send badges to model
exports.save = function(req, res, next){
    //preventing from middleware from tampering the req.body
    var badges = _.clone(req.body);
    model.save(badges, function(err){
       if(err)
           return res.json(503,{error: true});
        next();

        //works asynchronously
        model.trim();
    });
};

//send badges to pubsub socket in model
exports.send = function(req, res, next){
    var badges = _.clone(req.body);
    model.send(badges, function(err){
        if(err) return res.json(503,{error: true});
        res.json(200,{error: null});
    });
};

/*
get 10 badges from the model
*/

exports.get = function(req, res){
    model.get(function(err, data){
        if(err) return res.json(503,{error: true});
        res.json(200, data);
    });
};
module.exports = exports;