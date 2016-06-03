module.exports.init = function (db, words, callback) {
  db.batch(words.map(function (word) {
    return { type: 'put', key: word.length + word, value: word }
  }), function (err) {
    if (err) return console.error(err);
    callback();
  });
}

module.exports.query = function (db, word, callback) {
  var start = word.length + word.replace(/\*+/, ''),
    words = [];
  db.createReadStream({ start: start, end: start + '\xff' }).on('data', function (data) {
    words.push(data.value);
  }).on('error', function (err) {
    callback(err);
  }).on('end', function () {
    callback(null, words);
  });
}
