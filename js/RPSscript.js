/* https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript */
function say(m) {
    let msg = new SpeechSynthesisUtterance(m);
    speechSynthesis.speak(msg);
}

/* This is a simplified version of the game.
The Computer ALWAYS picks 'rock'.  
Does user's choose wins,looses, or ties vs 'rock'? */
function play(user) {
    if (user === 'rock') {
        result = "tie";
    }
    if (user === 'paper') {
        result = "win";
    }
    if (user === 'scissors') {
        result = "lose";
    }
    let myMessage = "You " + result + "! Computer chose rock"
    alert(myMessage);
    say(myMessage);
}

/* event listener - rock */
document.getElementById("rockButton").addEventListener("click", function(event) { 
    console.log(event.target.id); 
    play("rock"); 
});

/* event listener - paper */
document.getElementById("paperButton").addEventListener("click", function(event) { 
    console.log(event.target.id); 
    play("paper"); 
});

/* event listener - paper */
document.getElementById("scissorsButton").addEventListener("click", function(event) { 
    console.log(event.target.id); 
    play("scissors"); 
});
