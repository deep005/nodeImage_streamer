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
           return res.json(503,{
               error: true
           });
        next();
    });
};

//send badges to pubsub socket in model
exports.send = function(req, res, next){
    next();
};

module.exports = exports;