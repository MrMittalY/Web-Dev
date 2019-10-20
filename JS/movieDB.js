var movie = [
	{
		title: "In Bruges",
		rating: 5,
		seen: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		seen: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		seen: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		seen: false
	}
];
for(var i=0;i<movie.length;i++){
	if(movie[i].seen){
		console.log("You have watched "+movie[i].title+" - "+movie[i].rating+" stars")
	}
	else{
		console.log("You have not seen "+movie[i].title+" - "+movie[i].rating+" stars")
	}
}