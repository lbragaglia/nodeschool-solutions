'use strict';

module.exports = function (boxarts) {
    return boxarts.reduce(function (largest, current) {
        return current.width * current.height > largest.width * largest.height ? current : largest;
    }).map(function (boxart) { return boxart.url });
}
