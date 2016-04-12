var seneca = require('seneca')();

//seneca.use('../extend/program');

seneca.add('role:math,cmd:sum', function(msg, response) {
  response(null, {answer: Number(msg.left) + Number(msg.right)});
});

console.log('Listening at port ' + process.argv[2]);
seneca.listen(Number(process.argv[2]));

