'use stricts';

module.exports = function (movieLists) {
    var results = [];
    movieLists.forEach(function (m) {
        m.videos.forEach(function (v) {
            results.push(v.id)
        })
    });
    return results;
}