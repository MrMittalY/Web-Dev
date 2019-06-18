var a=-10;
console.log("All Numbers b/w -10 and 19");
while(a<20)
{
	console.log(a);
	a++;
}
a=10;
console.log("All even Numbers b/w 10 and 40");
while(a<=40)
{
	console.log(a);
	a+=2;
}
a=301;
console.log("All odd numbers between 200 and 333");
while(a<=333)
{
	console.log(a);
	a+=2;
}
a=5;
console.log("All numbers divisible by 5 AND 3 between 5 and 50");
while(a<50)
{
	if(a%5==0&&a%3==0)
	{
		console.log(a);
	}
	a++;
}