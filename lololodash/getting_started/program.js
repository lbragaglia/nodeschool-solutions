var _ = require("lodash");

var worker = function(coll) {
  return _.filter(coll, {active:true})
};

module.exports = worker;