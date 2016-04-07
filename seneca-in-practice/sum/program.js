var seneca = require('seneca')();

seneca.add( 'role:math,cmd:sum', function(msg, response) {
  response(null, {answer: msg.left+msg.right});
});

module.exports = seneca;