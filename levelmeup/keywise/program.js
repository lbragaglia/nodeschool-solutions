var level = require('level'),
  batch = level(process.argv[2], { valueEncoding: 'json' }).batch(),
  data = require(process.argv[3]);

data.forEach(function (item) {
  if (item.type === 'user') batch.put(item.name, item);
  else if (item.type === 'repo') batch.put(item.user + '!' + item.name, item);
});

batch.write();

/* alternative solution:
var operations = data.map(function (row) {
  var key
  if (row.type == 'user')
    key = row.name
  else if (row.type == 'repo')
    key = row.user + '!' + row.name
  return { type: 'put', key: key, value: row }
})

db.batch(operations)
*/