var express=require("express");
var methodOverride=require("method-override");
var expressSanitizer=require("express-sanitizer");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");


// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app",{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// MONGOOSE MODEL CONFIG
var blogSchema=new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog=mongoose.model("Blog",blogSchema);

// Blog.create({
// 	title: "Test Blog",
// 	image: "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg",
// 	body: "Test Blog"
// });

// RESTFUL ROUTES

app.get("/",function(req,res){
	res.redirect("/blogs");
});


//INDEX ROUTE
app.get("/blogs",function(req,res){
	Blog.find({},function(err,blogs){
		if(err){
			console.log("ERROR");
		}
		else{
			res.render("index",{blogs: blogs});
		}
	})
});


//NEW ROUTE
app.get("/blogs/new",function(req,res){
	res.render("new");
});


//CREATE ROUTE
app.post("/blogs",function(req,res){
	req.body.blog.body=req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog,function(err,newBlog){
		if(err){
			res.render("new");
		}
		else{
			res.redirect("/blogs");
		}
	});
});


//SHOW ROUTE
app.get("/blogs/:id",function(req,res){
	Blog.findById(req.params.id,function(err,blog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.render("show",{ blog:blog });
		}
	});
});

// EDIT ROUTE
app.get("/blogs/:id/edit",function(req,res){
	Blog.findById(req.params.id,function(err,blog){
		if(err){
			res.redirect("/blogs/"+req.params.id);
		}
		else{
			res.render("edit",{blog:blog});
		}
	});
});

// UPDATE ROUTE
app.put("/blogs/:id",function(req,res){
	req.body.blog.body=req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,blog){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.redirect("/blogs/"+req.params.id);
		}
	});
});

// DESTROY ROUTE
app.delete("/blogs/:id",function(req,res){
	Blog.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/blogs"+req.params.id);
		}
		else{
			res.redirect("/blogs");
		}
	});
});

app.get("*",function(req,res){
	res.redirect("/");
});

app.listen(3000,function(){
	console.log("Server Running on port 3000");
});
