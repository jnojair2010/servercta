const path = require('path');

module.exports = function(aplication, express){

    aplication.use(express.static(path.join(__dirname, '../../build')));

    aplication.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
       // res.send('Get resquest to the new / ')


    });
    aplication.get('/home', function(req, res){
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
      //  res.send('Get resquest to the homepage')

    });
    aplication.get('/contato', function(req, res){
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
      //res.send('Get resquest to the homepage')

  });


}
