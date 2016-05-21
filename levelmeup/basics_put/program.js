var level = require('level');
var db = level(process.argv[2]);

var obj = JSON.parse(process.argv[3]);
Object.keys(obj).forEach(function (key) {
    db.put(key, obj[key], function (err) {
        if (err) return console.error(err);
        console.log('%s=%s', key, obj[key]);
    })
});

//for (var key in obj) {
//  db.put(key, obj[key])
//}
