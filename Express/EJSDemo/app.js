var express=require("express");
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
	res.render("home");
});

app.get("/lovewith/:name",function(req,res){
	var name=req.params.name;
	res.render("love",{thingVar: name});
});

app.get("/posts",function(req,res){
	var posts=[
	{title:"Some book1", author:"Author1"},
	{title:"Some book2", author:"Author2"},
	{title:"Some book3", author:"Author3"},
	{title:"Some book4", author:"Author4"},
	{title:"Some book5", author:"Author5"}
	];

	res.render("posts",{posts:posts});
});

app.listen(3000,function(){
	console.log("Server listening on port 3000");
});