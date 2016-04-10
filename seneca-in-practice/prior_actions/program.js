module.exports = function (options) {
  
  this.add('role:math,cmd:sum', function(msg, response) {
    response(null, {answer: msg.left+msg.right});
  });
  this.add('role:math,cmd:sum,integer:true', function(msg, response) {
    response(null, {answer: Math.floor(msg.left) + Math.floor(msg.right)});
  });

  this.add('role:math,cmd:sum,integer:true', function(msg, response) {
    if (!Number.isInteger(msg.left)) msg.left = Math.floor(msg.left);
    if (!Number.isInteger(msg.right)) msg.right = Math.floor(msg.right);
    
    this.prior(msg, function (err, result) {
      if (err) return response(err);
      response(null, result);
    });
  });
};
