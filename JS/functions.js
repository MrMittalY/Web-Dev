function isEven(num)
{
	if(num%2==0)
		return true;
	return false;
}
function factorial(num)
{	if(num===1)
		return 1;
	else 
		return num*factorial(num-1);
}
function kebabToSnake(str)
{
	var newStr=str.replace(/-/g,"_");
	return newStr;
}