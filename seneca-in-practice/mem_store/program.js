var seneca = require('seneca')();

//seneca.use('../extend/program');

seneca.add('role:math,cmd:sum', function(msg, response) {
  response(null, {answer: Number(msg.left) + Number(msg.right)});
}).add('role:math,cmd:sum', function(msg, respond) {
  this.prior(msg, function (err, response) {
    var math = this.make('math');
    math.cmd = 'sum';
    math.left = msg.left;
    math.right = msg.right;
    math.save$(console.log);
    
    if (err) return respond(err);
    respond(null, math);
  });
}).add('role:math,cmd:operation-history', function (msg, respond) {
  var math = this.make('math');
  math.list$({}, function (err, list) {
    if (err) return console.error(err);
    console.log();
  });
});

console.log('Listening at port ' + process.argv[2]);
seneca.listen(Number(process.argv[2]));

