console.log("All Numbers b/w -10 and 19");
for(var a=-10;a<20;a++)
	console.log(a);

console.log("All even Numbers b/w 10 and 40");
for(var a=10;a<=40;a+=2)
	console.log(a);
	
console.log("All odd numbers between 200 and 333");
for(var a=201;a<=333;a+=2)
	console.log(a);

console.log("All numbers divisible by 5 AND 3 between 5 and 50");
for(var a=5;a<50;a++)
	if(a%5==0&&a%3==0)
		console.log(a);
	