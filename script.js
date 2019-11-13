const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsView =  0;
let minutesView = 0;
let hoursView = 0;

let intervalVar = null;
let resetButtonVal = 0;

var wordTimer = 0;
var wordCount = 0;
var elapseTime = 0;

function timerWatch(){
    seconds++;
    console.log("started all");
    //wordTimer = Math.round(wordcount / (elapseTime / 60));
    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 == 1){
            minutes = 0;
            hours++;
        }
    }

// Add leading zero to numbers 9 or below (purely for aesthetics):
    if (seconds < 10){
        secondsView = "0" + seconds.toString();
    }else{
        secondsView  = seconds;
    }
    if (minutes < 10){
        minutesView = "0" + minutes.toString();
    }else{
        minutesView = minutes;
    }
    
    if (hoursView < 10){
        hoursView = "0" + hours.toString();
    }else{
        hoursview = hours;
    }

    document.getElementById("clock").innerHTML = hoursView + ":" + minutesView + ":" + secondsView;
}

let Status = "Stop";

// Run a standard minute/second/hundredths timer:
function resetFunction(){
    if (Status === "Stop"){
        // Start the timer:
        startFunction();
        Status = "Start";
        
        console.log("start over clicked...", Status);
        document.getElementById("reset").innerHTML = "Stop All";
    }else{
        window.clearInterval(intervalVar);
        clearTimer();
        Status = "Stop";
        console.log("Stop Timer...", Status);
        document.getElementById("reset").innerHTML = "Start All"; 
    }    
}

// atch the text entered with the provided text on the page:

// Reset everything:
function clearTimer(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("test-area").value = "";
    document.getElementById("clock").innerHTML = "00:00:00";
    started = false;
    console.log("clearTimer function");
}
// Event listeners for keyboard input and the reset button:

var started = false;
function startFunction(){ 
    if(!started){
        intervalVar = window.setInterval(timerWatch, 100);
        started = true;
        Status = "Started";
        document.getElementById("reset").innerHTML = "Stop All";
        console.log("start function....");
    }
    
    
}
//const textBox = document.querySelector("#test-area");
testArea.addEventListener("keydown", startFunction, false);
//set interval function is for counting. Key down and key up for the counter.