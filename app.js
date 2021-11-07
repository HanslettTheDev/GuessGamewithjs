// Variables 
const guessInput = document.getElementById("guess-input");
const gameButton = document.getElementById("game-button");
const restartButton = document.getElementById("restart-button");
const historyButton = document.getElementById("historybox");
let guessedNumbers = [];
let correctRandomNumber = getRandomNumber();


// Now lets add the event listeners 
// So when a button is clicked it runs a function
gameButton.addEventListener("click", guessGame);
restartButton.addEventListener("click", restart);

// Guess Game Function (Main game function to kick start everything)
function guessGame() {
    let usersValue = guessInput.value;
    guessChecker(usersValue);
    guessHistory(usersValue);
    historyBox();
}

// Lets create the restart function and add an event listener 
function restart() {
    // reset random number
    correctRandomNumber = getRandomNumber();
    // reset error messages 
    document.getElementById("errorMessages").innerHTML = "";
    // reset guessedNumbers Array 
    guessedNumbers = [];
    // reset the history box
    historyButton.innerHTML = ""; 
}

// get a random number function and store it in a variable (1-101) where 101 is exclusive 
// Range is 1 - 100

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber)
    return randomNumber;
}

// Create the error messages
// The user sees a message whenever the guess is to low or high
// also the user sees a message when the win
function winMessage() {
    const message = "Congratulations! You Won!";
    let box = messageBox("win", message);
    document.getElementById("errorMessages").innerHTML = box;
}

function guessToHighMessage() {
    const message = "Guess Is Too High!, Try Again"
    let box = messageBox("wrong", message);
    document.getElementById("errorMessages").innerHTML = box;
}

function guessToLowMessage() {
    const message = "Guess Is Too Low, Try Again";
    let box = messageBox("wrong", message);
    document.getElementById("errorMessages").innerHTML = box;
}

// Create a function that displays errors messages if the guess is low, high or equal to the 
// computers guessed number

function guessChecker(usersValue) {
    if (usersValue < correctRandomNumber) {
        guessToLowMessage();
    } else if (usersValue > correctRandomNumber) {
        guessToHighMessage();
    } else {
        winMessage();
    }
}

// Create a function to create Divs for the errorMessages and use the Javascript switch statement to iterate
// over different errorMessages

function messageBox(boxType, message) {
    let box;
    switch(boxType){
        case "wrong":
            box = "<div class='alert alert-danger'>";
            break;
        case "win":
            box = "<div class='alert alert-success'>";
            break;
    }
    box += message;
    box += "</div>";
    return box;
}

// i forgot something lol
// We need to push all user input into a the guessNumber list before it gets used in the historyBox function

function guessHistory(guessed) {
    guessedNumbers.push(guessed);
}

// Display the history using a function
// We will use a while loop to go through the guessNumbers array and use string concactenation to display the
// list of guess numbers

function historyBox() {
    let i = guessedNumbers.length - 1;
    let message = "<ul class='list-group'>"
    while (i >= 0) {
        message += "<li class='list-group-item warning'>" + "You Guessed " + guessedNumbers[i] + "</li>";
        i--;
    }
    message += "</ul>";
    historyButton.innerHTML = message;
}