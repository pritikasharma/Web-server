var express = require('express');
var PORT = 3000;
//starts the server
var app = express();

var middleware = { 
		requireAuthentication: function (req, res, next) 
		{ 	console.log ('Private Route hit');
			next();
		},
		logger: function (req, res, next)
		{
			console.log ('Request sent : ' + new Date().toString() +  ' ' + req.method + '  ' + req.originalUrl );
			//console.log (req.querystring);
			next ();
		}
	};

app.use(middleware.logger);	

//server wide method
//app.use (middleware.requireAuthentication);

//call the get HTTP method
app.get ('/about', middleware.requireAuthentication, function (req, res)
{
	res.send ('About Us.... \n Orchard, Singapore ');
})

//expose the public folder
app.use (express.static(__dirname + '/public'));


//port number to listen on
app.listen(PORT, function (){
	console.log ('server started at port ' + PORT);
	});