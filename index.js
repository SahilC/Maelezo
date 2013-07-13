var exp=require("express");
var app=exp();
var port=3700;
app.set('views',__dirname+'/views');
//app.set('view engine',"jade");
//app.engine('jade',require('jade').__express);
app.get("/",function(req,res){
	res.sendfile(__dirname+"/views/page1.html");
});
app.get("/canvas.js",function(req,res){
	res.sendfile(__dirname+"/views/canvas.js");
});
app.use(exp.static(__dirname+'/public'));
var io=require('socket.io').listen(app.listen(port));
io.sockets.on('connection',function(socket){
	console.log("Connected");
	socket.on("point",function(data){
		socket.broadcast.emit("drawPoint",data);
	});
socket.on("spoint",function(data){
		socket.broadcast.emit("drwPoint",data);
	});
socket.on("dim",function(data){
		socket.broadcast.emit("redraw",data);
	});

});

