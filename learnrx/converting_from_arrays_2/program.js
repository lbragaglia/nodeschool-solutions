'use strict';

module.exports = function (lists, videos, boxarts, bookmarks) {
    return lists.map(function (list) {
        return {
            name: list.name,
            videos: videos.filter(function (video) {
                return video.listId === list.id
            }).concatMap(function (video) {
                return Array.zip(
                    boxarts.filter(function (boxart) {
                        return boxart.videoId === video.id
                    }).reduce(function (smallest, current) {
                        return current.width * current.height < smallest.width * smallest.height ? current : smallest
                    }),
                    bookmarks.filter(function (bookmark) {
                        return bookmark.videoId === video.id
                    }),
                    function (boxart, bookmark) {
                        return {
                            id: video.id,
                            title: video.title,
                            time: bookmark.time,
                            boxart: boxart.url
                        }
                    })
            })
        }
    })
}
