'use strict';

Array.prototype.map = function (projection) {
    var results = [];
    this.forEach(function (element) {
        results.push(projection(element))
    });
    return results;
};