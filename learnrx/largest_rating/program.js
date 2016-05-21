'use strict';

module.exports = function (ratings) {
    return ratings.reduce(function (largest, current) { return current > largest ? current : largest; });
}