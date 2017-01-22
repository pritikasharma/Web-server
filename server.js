var express = require('express');
var PORT = process.env.PORT || 3000; // port to listen on for HEROKU

//starts the server
var app = express();
var middleware = require ('./middleware.js');

app.use(middleware.logger);	

//server wide method
//app.use (middleware.requireAuthentication);

//call the get HTTP method
app.get ('/about', middleware.requireAuthentication, function (req, res)
{
	res.send (' * About Us.... \n Orchard, Singapore ');
})

//expose the public folder
app.use (express.static(__dirname + '/public'));


//port number to listen on
app.listen(PORT, function (){
	console.log ('server started at port ' + PORT);
	});