'use strict';
var _ = require("lodash");

var worker = function(coll) {
  return _.chain(coll).map(function(item) {
    return item + 'chained'
  }).map(function(item) {
    return item.toUpperCase()
  }).sortBy();
};

module.exports = worker;