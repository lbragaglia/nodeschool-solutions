'use strict';

module.exports = function (movieLists) {
    return movieLists.map(function (movie) {
        return movie.videos.map(function (video) {
            return video.boxarts.filter(function (boxart) {
                return boxart.width == 150 && boxart.height == 200
            }).map(function (boxart) {
                return {
                    id: video.id,
                    title: video.title,
                    boxart: boxart.url
                }
            })
        }).concatAll()
    }).concatAll()
}
