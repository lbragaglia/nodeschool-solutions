module.exports = function (options) {
  this.add('role:math,cmd:sum', function(msg, response) {
    response(null, {answer: msg.left+msg.right});
  });
  this.add('role:math,cmd:sum,integer:true', function(msg, response) {
    response(null, {answer: Math.floor(msg.left) + Math.floor(msg.right)});
  });
};
