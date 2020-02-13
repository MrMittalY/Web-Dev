var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/ob_ref_associations', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var userSchema=new mongoose.Schema({
	email: String,
	name: String,
	posts:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post"
	}]
});
var User=mongoose.model("User",userSchema);
module.exports=User;