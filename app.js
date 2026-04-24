let gameSeq=[];
let userSeq=[];

let btnColors=["red","yellow","green","purple"];
let level=0;

let started=false;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(!started){
        console.log("started");
        started=true;

        levelUp();
    }
})
function bntFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText='Level '+level;
    let randomNum=Math.floor(Math.random()*4);
    let randomColor=btnColors[randomNum];
    let randbtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    bntFlash(randbtn);
}
function checkAnswer(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over, Your score was <b>${level}</b>. <br>Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
}

function bntPress(){
    let clickedBtn=this
    userFlash(clickedBtn);

    let userColor=clickedBtn.getAttribute("id");
    
    userSeq.push(userColor);

    checkAnswer(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",bntPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}