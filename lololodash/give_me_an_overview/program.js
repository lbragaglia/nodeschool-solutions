'use strict';
var _ = require("lodash");

var worker = function(coll) {
  return _.chain(coll).reduce(function(acc, order) {
    if (!acc[order.article]) acc[order.article] = 0;
    acc[order.article] += order.quantity;
    return acc
  }, {}).map(function(i, key) {
    return {
      article: Number(key),
      total_orders: i
    }
  }).sortBy(function(i) {
    return -i.total_orders
  });
};

module.exports = worker;