var express=require("express");
var app=express();


// "/"=> "Hi There!"
app.get("/",function(req,res){
	res.send("Hi There!");
});


//"/bye"=> "Goodbye!"
app.get("/bye",function(req,res){
	res.send("GoodBye!");
});

//"/dog"=>"MEOW!"
app.get("/dog",function(req,res){
	res.send("MEOW!");
});

app.get("/:subredditName",function(req,res){
	var subreddit=req.params.subredditName;
	res.send("WELCOME TO "+subreddit.toUpperCase()+" SUBREDDIT PAGE");
});


app.get("/:subredditName/comments/:id/:title",function(req,res){
	console.log(req);
	res.send(("Comments PAGE").toUpperCase());
});

app.get("*",function(req,res){
	res.send("WRONG PAGE ADDRESS!");
});

app.listen(3000,function(){
	console.log('Server listening on port 3000!!');
});