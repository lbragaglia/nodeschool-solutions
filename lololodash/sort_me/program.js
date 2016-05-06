var _ = require("lodash");

var worker = function(coll) {
  return _.sortBy(coll, function (item) {
    return -item.quantity
  })
};

module.exports = worker;