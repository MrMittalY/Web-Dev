var mongoose=require("mongoose");
// mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/cat_app",{ useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

var catSchema=new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat=mongoose.model("Cat",catSchema);

// var george= new Cat({
// 	name: "Norris",
// 	age:1,
// 	temperament: "Evil"
// });

// george.save(function(err,cat){
// 	if(err){
// 		console.log("Something went wrong!!");
// 	}
// 	else{
// 		console.log("We just saved a cat to the database");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name:"New2",
	age: 12,
	temperament: "Playful"
}, function(err,cat){
	if(err)
		console.log(err);
	else{
		console.log(cat);}
});

Cat.find(function(err,cats){
	if(err){
		console.log("ERROR");
		console.log(err);
	}
	else{
		console.log("All Cats");
		console.log(cats);
	}
});