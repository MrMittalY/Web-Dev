var p1Score=0,p2Score=0;
var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");

/*
var h1=document.querySelector("h1");
p1Button.addEventListener("click",function(){
	p1Score++;
	h1.textContent =p1Score;
	h1.textContent +=" to ";
	h1.textContent +=p2Score;
});
p2Button.addEventListener("click",function(){
	p2Score++;
	h1.textContent =p1Score;
	h1.textContent +=" to ";
	h1.textContent +=p2Score;
});
*/

var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var reset=document.querySelector("#reset");
var winScoreDisplay=document.querySelector("#winScore");
var winningScore=Number(winScoreDisplay.textContent);
var Win=false;
var num=document.querySelector("input");


num.addEventListener("change",function(){
	winScoreDisplay.textContent=Number(num.value);
	winningScore=Number(num.value);
	if(winningScore>p1Score||winningScore>p2Score){
		resetGame();
	}
});

p1Button.addEventListener("click",function(){
	if(!Win)
		p1Score++;
	p1Display.textContent=p1Score;
	if(p1Score==winningScore){
			Win=true;
			p1Display.style.color="green";
	}
});

p2Button.addEventListener("click",function(){
	if(!Win)
		p2Score++;
	p2Display.textContent=p2Score;
	if(p2Score==winningScore){
			Win=true;
			p2Display.style.color="green";
	}
});

reset.addEventListener("click",resetGame);

function resetGame(){
	p1Score=0;
	p2Score=0;
	Win=false;
	p1Display.style.color="black";
	p2Display.style.color="black";
	p1Display.textContent=p1Score;
	p2Display.textContent=p2Score;
}