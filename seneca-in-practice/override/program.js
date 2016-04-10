module.exports = function (options) {
  //require('../extend/program').call(this, options);
  
  this.add('role:math,cmd:sum', function(msg, response) {
    response(null, {answer: msg.left+msg.right});
  });
  this.add('role:math,cmd:sum,integer:true', function(msg, response) {
    response(null, {answer: Math.floor(msg.left) + Math.floor(msg.right)});
  });

  this.add('role:math,cmd:sum', function(msg, response) {
    if (!Number.isFinite(msg.left) || !Number.isFinite(msg.right)) {
      return response(new Error('Expected left and right to be numbers.'));
    }
    
    this.prior(msg, function (err, result) {
      if (err) return response(err);
      response(null, result);
    });
  });
};
