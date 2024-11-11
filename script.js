const game=['Rock','Paper','Scissor'];
let player=document.getElementById("playerChoice");
let computer=document.getElementById("computerChoice");
let result=document.getElementById("res");
let yourS=document.getElementById("scoreY");
let compS=document.getElementById("scoreC");
let userchoice;
let computerchoice;
let random;
let sy=0;
let sc=0
function userChoice(choice){
    userchoice=choice;

    random=Math.floor(Math.random()*3)
    computerchoice=game[random];
    console.log(userchoice);
    console.log(computerchoice);
    player.textContent=`Player: ${userchoice}`;
    computer.textContent=`Computer: ${computerchoice}`;

    if(userchoice==computerchoice){
        ans="TIE";   
    }
    else{
        switch(userchoice){
            case 'Rock' :ans=(computerchoice=='Scissor')?"YOU WON":"YOU LOST";
            break;
            case 'Paper' :ans=(computerchoice=='Rock')?"YOU WON":"YOU LOST";
            break;
            case 'Scissor' :ans=(computerchoice=='Paper')?"YOU WON":"YOU LOST";
            break;
        }
    }
    if(ans=="YOU WON"){
        result.classList.remove("lost");
        result.classList.add("won");
        sy++
    }
    if(ans=="YOU LOST"){
        result.classList.remove("won");
        result.classList.add("lost");
        sc++
    }
    if(ans=="TIE"){
        result.classList.remove("won");
        result.classList.remove("lost");
    }

    console.log(ans);
    yourS.textContent=`YOU: ${sy}`;
    compS.textContent=`COMP: ${sc}`;

    result.textContent=ans;
}
function reseting(){
    sy=0;
    sc=0;
    player.textContent=`Player: Rock`;
    computer.textContent=`Computer: Rock`;
    
    result.classList.remove("won","lost");
    
    yourS.textContent=`YOU: ${sy}`;
    compS.textContent=`COMP: ${sc}`;
    
    result.textContent=`Result`;
}