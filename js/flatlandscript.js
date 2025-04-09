/* Find elements in DOM tree, assign to variable (best practice) */
let square = document.getElementById('square');
let words = document.getElementById('words');

/* Add event listener */
square.addEventListener('click', (event) => clicked());                         ////added event listener to square///
square.addEventListener('mouseover', (event) => changecolour('deepred'));      ////added event listener to square for changing colour when mouse hovered over///
/// had 'square.addEventListener('mouseout', (event) => changecolour('red')); 'ensuring  changes back to red when mouse is moved off - was not working would not keep changing colour until line was removed. //////

document.addEventListener('DOMContentLoaded', () => {
    greeting(); // Call the greeting function when the page loads
});

function changecolour(colour) {                      ////added function to change colour of square when mouse is hovered over
   square.style.backgroundColor = colour;           // Change the background color of the square
}

function greeting() {
    // console.log("Welcome to Flatland. I am Square.");
    words.innerHTML = "Welcome to Flatland.<br> I am Square.";
}

/* Add function to handle events */

console.log("Script file loaded.");

/* Lets add behaviour when clicked This makes sense to have in JavaScript as it
   'dynamic'
   1st-version, simple message added to innerHTML*///

   /////2nd-version, use buzzword generator */
function clicked () {
    let msg = "build a<br>" + createBuzzwordPhrase();
    words.innerHTML = msg;              // console.log(msg);
}
     
   
/* This function is supplied in the supporting text file.*/
function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}