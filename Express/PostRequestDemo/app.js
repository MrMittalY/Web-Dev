var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
	
app.get("/",function(req,res){
	res.render("home");
});


friends=["Ali", "Money", "Tina", "Nati", "Alam", "Surbhi"];

app.post("/addfriend",function(req,res){
	var newFriendname=req.body.newfriend;
	friends.push(newFriendname);
	console.log(friends);
	res.redirect("/friends");
});

app.get("/friends",function(req,res){
	res.render("friends",{friends:friends});
});

app.listen(3000,function(){
	console.log("Server listening on port 3000");
});