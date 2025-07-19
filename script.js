var option;
var playMusic=false;
document.querySelector("body").classList.add("excited");
setTimeout(start,100);
function start(){
    var entry=confirm("To view the content on this page, you need to verify your eligibility by answering a few simple questions. Are you ready? Click OK if yes.");
    if(entry){
        document.querySelector("body").classList.replace("excited","happy");
        setTimeout(function(){alert("Let's begin..")},100);
        setTimeout(function(){
        option=prompt("1.What’s my favorite color? 🎨\n 1.Cherry Blossom Pink \n2.Lavender");
        if(option==2){
            alert("YES you are correct :)");
            option=prompt("2.What’s my most used emoji?\n 1.✨\n 2.👀");
            if(option==2){
            alert("YES you are correct :)");
            option=prompt("3.Do I love spicy food or sweet food more?\n 1.spicy🌶️\n2.sweet🍭");
            if(option==1){
            alert("YES you are correct :)");
            PageReveal();
            }else{
                end();
            }
            }else{
                end();
            }
        }else{
            end();
        }
        },200);
    }
    else{
        document.querySelector("body").classList.replace("excited","sad");
        setTimeout(function(){alert("OK you may leave! :(");},100);
    }  
}
function end(){
    document.querySelector("body").classList.replace("happy","bye");
    setTimeout(function(){alert("You are wrong ! OK you may leave! :(");},100);
}
function PageReveal(){
    document.querySelector("body").classList.remove("happy");
    alert("Click anywhere on the page to hear a surprise!");
    document.addEventListener("click",function(){
        if(!playMusic){
            var audio=new Audio("song.mp3");
            audio.play();
            playMusic=true;
            document.getElementById("visible").style.visibility = "visible";
        }
    });
}
var cakeGif=document.getElementsByClassName("candle21")[0];
cakeGif.addEventListener("mouseover",cake);
cakeGif.addEventListener("click",cake);
cakeGif.addEventListener("touchstart",cake);
var surpriseGif=document.getElementsByClassName("gift")[0];
surpriseGif.addEventListener("mouseover",surprise);
surpriseGif.addEventListener("click",surprise);
surpriseGif.addEventListener("touchstart",surprise);
function cake(){
    document.getElementById("visible").classList.add("dim");
   document.querySelector("body").classList.add("cake");
    setTimeout(function () {
        document.getElementById("visible").classList.remove("dim");
        document.querySelector("body").classList.remove("cake");
    }, 4000);
}
function surprise(){
    document.getElementById("visible").classList.add("dim");
   document.querySelector("body").classList.add("surprise");
    setTimeout(function () {
        document.getElementById("visible").classList.remove("dim");
        document.querySelector("body").classList.remove("surprise");
    }, 4000);
}