let user=0
let comp=0;
const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");

const userScore=document.querySelector("#user");
const compScore=document.querySelector("#computer");
const generateCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
}
const playGame=(userChoice)=>{
    const compChoice=generateCompChoice();
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        user++;
        userScore.innerText=user;
        msgPara.innerText=`You Win! Computer chose ${compChoice} and ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green";
    }else{
        comp++;
        compScore.innerText=comp;
        msgPara.innerText=`You Lost! Computer chose ${compChoice} and ${compChoice} beats ${userChoice} `;
        msgPara.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    msgPara.innerText="Game was a Draw! Play Again!";
    msgPara.style.backgroundColor = "orange";

}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})