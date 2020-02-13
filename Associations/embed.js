var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/embedding_associations', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

var postSchema=new mongoose.Schema({
	title: String,
	content: String
});
var Post=mongoose.model("Post",postSchema);

var userSchema=new mongoose.Schema({
	email: String,
	name: String,
	posts:[postSchema]
});
var User=mongoose.model("User",userSchema);

User.findOne({name:"Grangy Drandr"},function(err,user){
	if(err){
		console.log(err);
	}
	else{
		user.posts.push({
			title: "New Post 2",
			content: "COntent for post 2"
		});
		user.save(function(err,user){
			console.log(user);
		});
	}
}); 

// var newUser=new User({
// 	email: "hello@hogwarts.edu",
// 	name: "Grangy Drandr"
// });

// newUser.posts.push({
// 	title:"How to brew ",
// 	content: "Stir it make it"
// });



// newUser.save(function(err,user){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(user);
// 	}
// });

// var newPost=new Post({
// 	title:"Reflection on Apples",
// 	content: "They are delicious"
// });
// newPost.save(function(err,post){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(post);
// 	}
// });