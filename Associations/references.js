var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/ob_ref_associations', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var Post=require("./models/posts");
var User=require("./models/user");

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob belcher"
// });

// var newUser=new User({
// 	email: "bob@gmail.com",
// 	name: "Bob belcher"
// });
// newUser.save(function(err,user){
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log(user);
// });

// Post.create({
// 	title:"How to cook the best burger 4",
// 	content: " Content burger 4"
// },function(err,post){
// 	User.findOne({name: "Bob belcher"},function(err,foundUser){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err,data){
// 				if(err)
// 					console.log(err);
// 				else{
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err,user){
	if(err){
		console.log(err);
	}else{
		console.log(user);
	}
});