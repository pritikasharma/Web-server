// Middle ware for logging and authentication

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

module.exports = middleware;