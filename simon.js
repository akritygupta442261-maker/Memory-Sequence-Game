let gameSeq=[];
let userSeq= [];

let btns= ["yellow","green", "purple", "red"];

let started= false;
let level= 0;
let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started==false){
    console.log("game is started");
    started= true;
    levelUp();
   }
});

//jaise he level up ho raha hai hum level ko badha danda level++ kar k,
//h2.inner text me level update
//choose random index (0 to 3) and by using of this random color choose karanga
//random  color se class banayanga
//class ki help se document.queryselector ka use kr k wo random button choose kr langa
//aur button.flash se button ko falsh kara danga

//LEVEL UP FUNCTION


//----- last me jaise he level up hoga userseq kjhali ho jana chahiya aur suru se sb color add honna chahia

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level .${level}`;



 //btn flash function- turns white
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},200);
}

 //random button falsh- turns gree
    let randIndex = Math.floor(Math.random()*btns.length);
    let randColor= btns[randIndex];
    let  randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
   // console.log(gameSeq);
    gameFlash(randbtn);
}

//user flash
function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
    btn.classList.remove("userFlash");
},200);
}


//--------------------------------------------------------
   

//EVENT LISTNER
function btnPress(){
    //console.log(this);
    let btn= this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    //to check user ne jo v button click kiya correct hai ya ni
    checkAns(userSeq.length-1);

}


function checkAns(idx){
    //console.log("current level:",level);
    //let idx= level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length ){
            //ek level se dushre me jane me time
            setTimeout(levelUp,1000);
            
        }
        // console.log("same value");
    }else{
        h2.innerHTML=`Game over! <b> Your score was  ${level}</b> 
        <br>
        <h3>Press any key to start</br> </h3>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        })
        reset();
    }

}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

//--------------------------------------------------------------
//MATCHING SEQUENCE
//jaise  jaise game new new colore generate karage usko game seq me add karanga


//reset function
function reset(){
    started= false;
    gameSeq= [];
    userSeq= [];
    level= 0;
}
