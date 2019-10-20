window.setTimeout(function(){
var todo=[];
var ans=prompt("What do you want to do?");
while(ans!=="quit"){
	if(ans==="new")
		newTodo();	
	else if(ans==="list")
		listTodo();
	else if(ans==="delete")
		deleteTodo();
	ans=prompt("What do you want to do?");
}
console.log("You Quit!!");

function newTodo()
{	var newAns=prompt("What do you want to add in a to do list");
		todo.push(newAns);
		console.log("Added "+" "+newAns);
}

function listTodo()
{	console.log("*******");
		// todo.forEach(function(x,i,arr){
		// 	console.log(i+": "+x);
		// })

		todo.forEach(show);
		function show(x,i,arr){
			console.log(i+": "+x);
		}
		console.log("*******");
}

function deleteTodo()
{	var deleteAns=prompt("Which item to delete?");
		var i=todo.indexOf(deleteAns);
		todo.splice(i,1);
		console.log("Deleted "+" "+deleteAns+" from index "+i);
}

},2000);

