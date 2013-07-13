window.onload=function(){
	var messages=[];
	var socket=io.connect('http://localhost:3700');	
	socket.on("draw",function(data){
		console.log(data);
		if(data){
			var canv=document.getElementById('board');			
			var x=canv.getContext("2d");
			x.clearRect(0,0,x.width,x.height);
			var img=new Image;
			img.onload=function(){
				x.drawImage(img,0,0);
			}
			img.src=data;
			canv.style.backgroundImage=img;			
			//var x=document.getElementById('board');
			//var ctx=x.getContext('2d');
			//ctx.font="30px Arial";
			//ctx.clearRect(0,0,x.width,x.height);
			//ctx.strokeText(data.message,10,50);
		}
	});
	send.onclick=function(){
		var text=field.value;
		socket.emit('send',{message:text});
		var o=document.getElementById('board').toDataURL();
		socket.emit('drw',o);
	};
}
