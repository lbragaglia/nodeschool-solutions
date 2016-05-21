//var objectAssign = require('object-assign');

module.exports = function (videos) {
    return videos.reduce(function (accumulatedMap, video) {
        //var copyOfAccumulatedMap = objectAssign(accumulatedMap);
        //copyOfAccumulatedMap[String(video.id)] = video.title;
        //return copyOfAccumulatedMap;
        accumulatedMap[String(video.id)] = video.title;
        return accumulatedMap;
    }, {});
}
