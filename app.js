 var score,activePlayer,randomNumber,gamePlaying;


init();

/*
document.querySelector('#current-' + activePlayer).textContent = x;


document.querySelector('.dice').innerHTML = '<h1>'+x+'</h1>'
*/
 

function changeDice()
{
    if(gamePlaying){
        var x = Math.floor(Math.random() * 6) + 1;
    var DOMdice = document.querySelector('.dice');
  document.querySelector(".dice").style.display = 'block';
    DOMdice.src = 'dice-'+x+'.png';
    
    if(x > 1)
        {
            randomNumber += x;
            document.getElementById("current-"+activePlayer).textContent = randomNumber;
        }
    else
        {
           nextPlayer();
        }
    }
    
}


//document.getElementById("myBtn").addEventListener("click", displayDate);
document.querySelector(".btn-roll").addEventListener("click",changeDice);

document.querySelector(".btn-hold").addEventListener("click",hold);

function hold(){
    if(gamePlaying){
         score[activePlayer] += randomNumber;
    document.querySelector("#score-"+activePlayer).textContent = score[activePlayer];
    
    //check for winner if any player get it >=100 then he-she will win the game.
    if(score[activePlayer] >= 20)
        {
            document.querySelector("#name-"+activePlayer).textContent = "Winner!";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            gamePlaying = false;
            document.querySelector(".dice").style.display = 'none';
            
        }
    else
    //next player
       { 
           nextPlayer();
       }
        
    }
   
}
function nextPlayer(){
     if(activePlayer === 0)
            {
                    activePlayer = 1;
                  
               
            }
            else 
            {
                    
                    activePlayer = 0;
                
            }
              randomNumber = 0;
            
           document.getElementById("current-0").textContent = "0";
           document.getElementById("current-1").textContent = "0";
           document.querySelector(".player-0-panel").classList.toggle("active");
           document.querySelector(".player-1-panel").classList.toggle("active");
            document.querySelector(".dice").style.display = 'none';
            
}
document.querySelector(".btn-new").addEventListener('click',init);

function init(){
    
     score = [0,0];
    activePlayer = 0;
    randomNumber = 0;
    gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
    
    document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
    
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 0";
    
     document.querySelector(".player-0-panel").classList.remove("winner");
     document.querySelector(".player-1-panel").classList.remove("winner");

     document.querySelector(".player-0-panel").classList.remove("active");
   
     document.querySelector(".player-1-panel").classList.remove("active");
     document.querySelector(".player-0-panel").classList.add("active");
}

