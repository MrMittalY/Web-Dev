function average(score){
	var count=score.length,sum=0;
	for(var i=0;i<count;i++){
		sum+=score[i];
	}
	var avg=sum/count;
	console.log(Math.round(avg));
}

var scores=[21,43,64,86,32];
average(scores);