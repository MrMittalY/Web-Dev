var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/ob_ref_associations', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var postSchema=new mongoose.Schema({
	title: String,
	content: String
});
module.exports= mongoose.model("Post",postSchema);