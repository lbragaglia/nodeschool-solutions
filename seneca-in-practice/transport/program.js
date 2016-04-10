var seneca = require('seneca')();

seneca.use('../extend/program');

seneca.listen(process.argv[3]);

