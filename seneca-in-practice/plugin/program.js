module.exports = function (options) {
  this.add('role:math,cmd:sum', function(msg, response) {
    response(null, {answer: msg.left+msg.right});
  });
};
