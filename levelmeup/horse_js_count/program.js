module.exports = function (db, date, callback) {
  var tweets = 0;
  db.createReadStream({ start: date }).on('data', function (data) {
    tweets += 1;
  }).on('error', function (err) {
    callback(err);
  }).on('end', function () {
    callback(null, tweets);
  });
}