'use strict';

Array.prototype.concatAll = function () {
    var results = [];
    this.forEach(function (subarray) {
        subarray.forEach(function (el) {
            results.push(el);
        });
    });
    return results;
}