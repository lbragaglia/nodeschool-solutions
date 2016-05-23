var level = require('level'),
    db = level(process.argv[2]),
    lines = require('fs').readFileSync(process.argv[3], 'utf-8').split('\n'),
    ops = [];

lines.forEach(function (line) {
    var record = line.split(',');
    // 'value' is ignored for del
    ops.push({ type: record[0], key: record[1], value: record[2] });
});

db.batch(ops, function (err) {
    if (err) return console.error(err);
    console.log('batch ok');
});

/* Alternative method:
  level(process.argv[2], function (err, db) {
    if (err)
      throw err
  
    // chained batch object
    var batch = db.batch()
    data.forEach(function (line) {
      var d = line.split(',')
      if (d[0] == 'del')
        return batch.del(d[1])
      batch.put(d[1], d[2])
    })
    // commit the batch
    batch.write()
  })
*/
