'use strict';
var _ = require("lodash");

var worker = function(coll) {
    var average = _.reduce(coll, function(acc, freelancer) {
        return acc + freelancer.income
    }, 0) / coll.length;
    
    coll = _.sortBy(coll, function(i) {
        return i.income
    });
    
    var underperform = _.filter(coll, function(i) {
            return i.income <= average
        }),
        overperform = _.filter(coll, function(i) {
            return i.income > average
        });
    
    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };
};

module.exports = worker;