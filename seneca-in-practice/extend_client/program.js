var seneca = require('seneca')();

seneca.use('../extend/program');

seneca.act({role: 'math', cmd: 'sum', left: Number(process.argv[3]), right: Number(process.argv[4])}, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
}).act({role: 'math', cmd: 'sum', left: Number(process.argv[3]), right: Number(process.argv[4]), integer: true}, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
});

