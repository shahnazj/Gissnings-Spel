let correctNumber = Math.floor(Math.random()* 100) + 1;
let guessCount = 0;


const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const resultDisplay = document.getElementById('result');
const guessList = document.getElementById('guessList');

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    // Validering
    if (!userGuess) {
        alert("Var vänlig ange ett tal.");
        return;
    }
    if (userGuess < 1 || userGuess > 100) {
        return;
    }

    guessCount++;
    const listItem = document.createElement('li');
    listItem.textContent = `Gissning ${guessCount}: ${userGuess}`;
    guessList.appendChild(listItem);

    if (userGuess < correctNumber) {
        resultDisplay.textContent = "För lågt!";

    } else if ( userGuess > correctNumber) {
        resultDisplay.textContent = "för högt!";

    } else {
        resultDisplay.textContent = `Den gissning  är korrekt! Antal gissningar = ${guessCount}`;

    }
// Rensa inputfältet

guessInput.value = '';



})