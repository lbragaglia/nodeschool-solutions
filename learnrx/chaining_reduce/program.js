module.exports = function (movieLists) {

    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
    // [
    //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.
        concatMap(function (movie) {
            return movie.videos.concatMap(function (video) {
                return video.boxarts.reduce(function (smallest, current) {
                    return current.width * current.height < smallest.width * smallest.height ? current : smallest;
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

// Input example:
// [
//   {
//     name: "Thrillers",
//     videos: [
//       {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxarts": [
//           { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
//           { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//       }
//     ]
//   }
// ]
