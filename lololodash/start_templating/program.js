'use strict';
var _ = require("lodash");

var worker = function(val) {
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(val);
    /*
    return _.template('Hello <%= name %> (logins: <%= logins %>)')({
        name: val.name,
        logins: val.login.length
    });
    */
};

module.exports = worker;