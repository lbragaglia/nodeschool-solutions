'use strict';

module.exports = function (movieLists) {
    return movieLists.
        concatMap(function (movie) {
            return movie.videos.concatMap(function (video) {
                return Array.zip(video.boxarts.reduce(function (smallest, current) {
                    return current.width * current.height < smallest.width * smallest.height ? current : smallest;
                }), video.interestingMoments.filter(function (interestingMoment) {
                    return interestingMoment.type === 'Middle';
                }), function (boxart, interestingMoment) {
                    return {
                        id: video.id,
                        title: video.title,
                        url: boxart.url,
                        time: interestingMoment.time
                    }
                })
            })
        })
}