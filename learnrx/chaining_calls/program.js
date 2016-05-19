'use strict';

module.exports = function (videos) {
    return videos.filter(function (el) {
        return el.rating === 5.0
    }).map(function (el) {
        return el.id
    })
}