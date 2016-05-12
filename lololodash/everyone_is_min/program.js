'use strict';
var _ = require("lodash");

function warm(item) {
  return item > 19
}
var worker = function(coll) {
  var result = {
    hot: [],
    warm: []
  };
  _.forEach(coll, function(item, key) {
    if (_.every(item, warm)) {
      result.hot.push(key)
    } else if (_.some(item, warm)) {
      result.warm.push(key)
    }
  })
  return result
};

module.exports = worker;