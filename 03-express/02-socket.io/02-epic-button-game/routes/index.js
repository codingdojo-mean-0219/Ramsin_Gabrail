module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
    })
    io.sockets.on("connection", function(socket){
        var counter =  0;
        socket.on("posting_count", function(data){
            counter++;
            socket.emit("countDisplay", {count:counter});
        })
        socket.on("resetting_count", function(data){
            counter = 0;
            socket.emit("countDisplay", {count: counter});
        })
    })
}