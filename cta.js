
// 1º install express ( npm install express --save )
// 2º install nodemon (npm install -g nodemon)
// 3º install consign para incluir arquivos separad no arquivo app
//   (npm intall consign --save )


var app = require('./config/server')

app.listen(5000, function(){
    console.log("servidor on");
});