var level = require('level');
var db = level(process.argv[2]);

(function fetchNext(i) {
    var key = 'key' + i;
    db.get(key, function (err, value) {
        if (err && !err.notFound) throw err; 
        if (!err) console.log('%s=%s', key, value);
        if (i < 100) fetchNext(i + 1);
    })
}) (0)

/* WRONG! may be out of order
// solves: variable binding in closure
// does not solve: sequence of prints in async cb
for (var i = 0; i <= 100; i++) {
    var key = 'key' + i;
    db.get(key, print(key));
}

function print(key) {
    return function (err, value) {
        if (!err) console.log('%s=%s', key, value);
    }
}
*/