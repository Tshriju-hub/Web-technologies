var btn0=document.getElementById("status-head")
btn0.textContent='Choose!!';
var btn=document.getElementById("rock-button")
btn.textContent='Rock';
var btn1=document.getElementById("paper-button");
btn1.textContent='Paper';
var btn2=document.getElementById("scissors-button");
btn2.textContent='Scissors';
console.log(btn)
let moveDisplays=document.querySelectorAll('.move-display');
let buttons = document.querySelectorAll('button');
let statusDisplay=document.querySelector('#status-head');
let winMsg='victory';
let loseMsg='Crushing defeat';
let tieMsg = 'tie';
let movelist=['Rock','Paper','Scissors'];

function startGame(playerchoice){
    //for (let i=0; i< buttons.length;i++){
       // buttons[i].textContent=movelist[i]
       // buttons[i].style.display='inline-block';
    const computerchoice=movelist[Math.floor(Math.random() *movelist.length)]

moveDisplays.children[0].textContent='Player: ${playerchoice}';
moveDisplays.children[1].textContent='Computer: ${computerchoice}';

 const result= calcResult(playerchoice, computerchoice)
statusDisplay.textContent = result;
if (result===winMsg || result || loseMsg || result=== tieMsg)
  btn.style.display='none';
  btn1.style.display='none';
  btn2.style.display='Play Again';
  btn2.addEventListener('click', resetGame)}


function calcResult(move1, move2){
if(move1==move2){
    return tieMsg;}
else if ((move1===movelist[0]&&move2===movelist[2])
||(move1===movelist[1]&&move2===movelist[0])||
(move1===movelist[2]&&move2===movelist[1]))
{
return winMsg}
else {
    return loseMsg;}
}
function resetGame(){

}

btn.addEventListener('click', () => startGame(movelist[0]))
btn1.addEventListener('click', () => startGame(movelist[1]))
btn2.addEventListener('click', () => startGame(movelist[2]))