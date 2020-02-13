var express=require("express");
var app=express();

app.get("/",function(req,res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/:animal",function(req,res){
	var sounds={
		pig:"Oink",
		cow: "Moo",
		dog: "Woof woof"
	};
	var animal=req.params.animal.toLowerCase();
	var sound=sounds[animal];
	// if(animal=="pig"){
	// 	sound="Oink";
	// }
	// else if(animal=="cow"){
	// 	sound="Moo";
	// }
	// else if(animal=="dog"){
	// 	sound="Woof woof";
	// }
	res.send("The "+animal+" says '"+sound+"'");
});

app.get("/repeat/:word/:n",function(req,res){
	var word=req.params.word;
	var n=req.params.n;
	var string="";
	for(var i=0;i<n-1;i++){						
		string+=word+" ";
	}
	res.send(string+word);
});

app.get("*",function(req,res){
	res.send("Sorry, page not found... What are you doing with your life?");																																																																																																																																																																																																																																																																																																																																																																																																																																				
})

app.listen(3000,function(){
	console.log("Server listening on port 3000");
});