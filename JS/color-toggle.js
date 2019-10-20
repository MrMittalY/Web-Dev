var button=document.querySelector("button");
var body=document.querySelector("body");
var isPurple=false;
// button.addEventListener("click",function(){
// 	if(!isPurple)
// 		body.style.background="purple";
// 	else{
// 		body.style.background="white"
// 	}
// 	isPurple=!isPurple;
// });
button.addEventListener("click",function(){
	body.classList.toggle("purple");
});