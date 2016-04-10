var seneca = require('../sum/program');

//seneca.use('../sum/program.js');

seneca.act({role: 'math', cmd: 'sum', left: Number(process.argv[3]), right: Number(process.argv[4])}, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
});

