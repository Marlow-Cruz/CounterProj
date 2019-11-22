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

var typedText = "";

const wordCountTotal = document.querySelector("#wordCount");
const wordPerMinTotal = document.querySelector("#wordPerMin");

function timerWatch(){
    elapseTime++;
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
    document.getElementById("clock").innerHTML =  hoursView + ":" + minutesView + ":" + secondsView;
}
var Status = "Stop";
// Reset function to all variables. 
function resetFunction(){
    
        window.clearInterval(intervalVar);
        clearTimer();
        document.getElementById("reset").innerHTML = "Start Over"; 
        index = 0;
        wordCount = 0;
        wordCount = 0;
        elapseTime = 0;
        testArea.addEventListener("keydown", startFunction, false);
        //testWrapper.classList.remove("myClassWrapper");
}

// atch the text entered with the provided text on the page:

// Reset everything:
function clearTimer(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    resetButtonVal = 0;
    document.getElementById("test-area").value = "";
    document.getElementById("clock").innerHTML = "00:00:00";
    started = false;
    typedText = "";
    wordCountTotal.innerHTML = " ";    
    wordPerMinTotal.innerHTML = " ";
    console.log("clearTimer function");
}


var started = false;
let evt = 0;
var index = 0;
var classVal = "false";

// Backspace and remove character
function remove_character(str, char_pos) {
    var part1 = str.substring(0, char_pos);
    var part2 = str.substring(char_pos + 1, str.length);
    console.log("Remove Character....." + part2);
    return (part1 + part2);
 }

// Start the application 
function startFunction(e){ 

    //update and then validate....


    if(typedText.length !== originText.length || typedText !== originText){
        if(e.key != "Shift"){
            if(e.key == "Backspace"){
                index--;
                typedText = remove_character(typedText, index);
                console.log("Removed : " + typedText);
                if(index < 0){
                    index = 0;
                }
            }else {
                        typedText = typedText.concat(e.key);
                        index++;
                        console.log("Text : " + typedText + "  typed: " + e.key);
                        if(typedText === originText){
                            completeCount();
                        }
                        if(!started){
                            intervalVar = window.setInterval(timerWatch, 100);
                            started = true;
                            Status = "Started";
                            document.getElementById("reset").innerHTML = "Stop All";
                            console.log("start function...." + e.key);
                        }
                        if(typedText.substring(0, index) === originText.substring(0, index)){
                            console.log("Typed correct : " + typedText.substring(0, index)  + "    Index = " + originText.substring(0, index));
                            wordCount++;
                            
                            //index++;  
                            if(classVal == "true"){
                                testWrapper.classList.toggle("myClassWrapper");
                                classVal = "false";
                            }
                        }else{
                            if(classVal == "false"){
                                testWrapper.classList.toggle("myClassWrapper");
                                classVal = "true";
                            }
                            //index++;
                        } 
            }
        }
    }else{
        console.log("Completed.vvvv....." + originText + " typedText " + typedText);
        
    }   
}
//Complete counting characters. 

function completeCount(){
    console.log("Completed......" + originText + " typedText " + typedText);
    wpm = Math.round(wordCount / (elapseTime / 60));
    console.log("Word Per Minute : " + wpm);
    clearInterval(intervalVar);
    //alert("Word per Minute : " + wpm);
    
    wordCountTotal.innerHTML = wordCount;    
    wordPerMinTotal.innerHTML = wpm;

}


testArea.addEventListener("keydown", startFunction, false);
//set interval function is for counting. Key down and key up for the counter.