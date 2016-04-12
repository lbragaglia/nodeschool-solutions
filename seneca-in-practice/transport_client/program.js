var seneca = require('seneca')();

//console.log(process.argv[2]);
//console.log(process.argv[3]);
seneca.client({
  type: 'tcp'
}).act({
  role: 'math',
  cmd: 'sum',
  left: process.argv[2],
  right: process.argv[3]
}, function(err, response) {
  if (err) return console.error(err);
  console.log(response);
  this.close()
});