'use strict';

Array.prototype.filter = function (predicate) {
    var results = [];
    this.forEach(function (element) {
        if (predicate(element)) results.push(element)
    });
    return results;
};