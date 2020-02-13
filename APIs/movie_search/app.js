var express=require('express');
var app=express();
var request=require('request');

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("search");
});

app.get("/results",function(req,res){
	var q=req.query.searchitem;
	var url="http://www.omdbapi.com/?s="+q+"&apikey=thewdb";
	request(url,function(error,response,body){
		var data=JSON.parse(body);
		res.render("results",{data:data});
		// res.send(results["Search"][1]);
	});
	
});



app.listen(3000,function(){
	console.log("Movie App is running!!");
})