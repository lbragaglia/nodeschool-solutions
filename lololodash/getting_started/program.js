// include the Lo-Dash library
var _ = require("lodash");

var worker = function(coll) {
  return _.filter(coll, {active:true})
};

// export the worker function as a nodejs module
module.exports = worker;