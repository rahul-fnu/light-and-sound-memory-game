//global constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//global variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter;
var clueHoldTime = 1000;
var freqMap = {};
var mistakes;

function startGame() {
  //sound.play();
  playAudio();
  pattern = [];
  randomPattern();
  randomFrequency();
  gamePlaying = true;
  mistakes = 0;
  progress = 0;
  clueHoldTime = 1000;
  //sound.currentTime=0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function playAudio() {
  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3").play();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function randomPattern() {
  for (let i = 0; i < 8; i++){
     pattern[i] = Math.round(Math.random() * 5);
  }
}

function randomFrequency() {
  for (let i = 1; i <= 5; i++){
     freqMap[i] = Math.random()*200 + 90;
  }
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  clueHoldTime *= 0.85;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You Won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter != progress){
      guessCounter++;
    }else{
      if(progress < pattern.length - 1){
        progress++;
        playClueSequence();
      }else{
        winGame();
      }
    }
  }else{
    mistakes++;
    if (mistakes >= 3) {
      loseGame();
    }  
  }
}    


function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
randomPattern();
randomFrequency();