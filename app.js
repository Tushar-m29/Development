let yourScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choices");
let text=document.querySelector(".text");
let Pscore=document.querySelector("#player-score");
let Cscore=document.querySelector("#comp-score");
let start=document.querySelector(".rebtn");

const genCompChoice=()=>{
    let options = ["stone","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}


const drawGame=()=>{
    text.innerText="Game Drawn, Play Again";
    text.style.backgroundColor="#9a8c98";
}

const Showwinner=(Userwin,Userchoice,Comphoice)=>{
    if(Userwin)
     {
        text.innerText=`You Win , Your ${Userchoice} beats ${Comphoice}`;
        text.style.backgroundColor="#90be6d"; 
        Pscore.innerText=++yourScore;
     }
    else
    {
        text.innerText=`You Lost , ${Comphoice} beats your ${Userchoice}`;
        text.style.backgroundColor="#f9844a"; 
        Cscore.innerText=++compScore;
    }
    
}


start.addEventListener("click",()=>{
    let yourScore=0;
    let compScore=0;
    text.innerText="Play Your Move";
    text.style.backgroundColor="#9a8c98";
    Cscore.innerText=compScore;
    Pscore.innerText=yourScore;
})

const playgame=(Userchoice)=>{
    console.log("User Choice is",Userchoice);
    //Generate Computer Choice
    const Comphoice=genCompChoice();
    console.log("Computer's Choice is",Comphoice);
    if(Userchoice === Comphoice)
    {
        drawGame();
    }
    else
    {
        let Userwin=true;
        if(Userchoice==="stone")
        {
            Userwin = Comphoice==="paper"?false:true;
        }
        else if(Userchoice==="paper")
        {
            Userwin = Comphoice==="scissors"?false:true;
        }
        else
        {
            Userwin = Comphoice==="stone"?false:true;
        }
        Showwinner(Userwin,Userchoice,Comphoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");
        playgame(Userchoice);
    })

})