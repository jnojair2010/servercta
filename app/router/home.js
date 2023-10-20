module.exports = function(aplication){

    aplication.get('/', function( req, res){
        res.send('Get resquest to the homepage')
        console.log(" entrou no app/get");
    });
    

}


