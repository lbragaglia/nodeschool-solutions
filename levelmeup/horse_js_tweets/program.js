module.exports = function (db, date, callback) {
  var tweets = [],
    singleDay = date.slice(0, 10);

  db.createReadStream({ start: singleDay, end: singleDay + '\xff' }).on('data', function (data) {
    tweets.push(data.value);
  }).on('error', function (err) {
    callback(err);
  }).on('end', function () {
    callback(null, tweets);
  });
}