var multilevel = require('multilevel'),
  net = require('net'),
  db = multilevel.client(),
  connection = net.connect(4545);

connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function (err, value) {
  if (err && !err.notFound) throw err;
  if (!err) console.log(value);
  connection.end();
})