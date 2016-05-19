'use strict';

module.exports = function (movieLists) {
  return movieLists.map(function (el) {
      return el.videos.map(function (el) {
          return el.id
      })
  }).concatAll()
}
