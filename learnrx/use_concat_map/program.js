'use strict';

module.exports = function (movieLists) {
    return movieLists.concatMap(function (movie) {
        return movie.videos.concatMap(function (video) {
            return video.boxarts.filter(function (boxart) {
                return boxart.width == 150 && boxart.height == 200
            }).map(function (boxart) {
                return {
                    id: video.id,
                    title: video.title,
                    boxart: boxart.url
                }
            })
        })
    })
}
