var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/browsix-net'});


server.on('connection', function(id) { 
	console.log(id + " has connected!");
 });
