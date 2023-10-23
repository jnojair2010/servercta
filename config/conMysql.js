var mysql = require('mysql');

var conMysql = function(){

	console.log('Entrou no metodo de conexão com banco de dado');
	return  mysql.createConnection({
		host:'localhost',
		user:'jair',
		password:'Lwx5nk@Lwx5nk',
		database:'rdc216',
		
	});


}

module.exports =  function(){
	console.log('modulo de conexao com banco de dado instaciado');
	return conMysql;
};