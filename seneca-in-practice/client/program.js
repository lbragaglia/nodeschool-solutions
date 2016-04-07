var seneca = require('../sum/program.js');

//seneca.use('../sum/program.js');

seneca.act({role: 'math', cmd: 'sum', left: parseInt(process.argv[3]), right: parseInt(process.argv[4])}, function(err, result) {
  if (err) return console.error(err);
  console.log(result);
});

