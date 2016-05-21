'use strict';

module.exports = function (boxarts) {
    var currentSize,
        maxSize = -1,
        largestBoxart;

    boxarts.array.forEach(function (boxart) {
        currentSize = boxart.width * boxart.height;
        if (currentSize > maxSize) {
            largestBoxart = boxart;
            maxSize = currentSize;
        }
    });
    
    return largestBoxart;
}