'use strict';
var _ = require("lodash");

var worker = function(coll) {
  return _.chain(coll).groupBy('username').map(function(value, key) {
    return {
      username: key,
      comment_count: _.size(value)
    }
  }).sortBy(function(i) {
    return -i.comment_count
  });
  //}).sortBy('comment_count').reverse()
};

module.exports = worker;