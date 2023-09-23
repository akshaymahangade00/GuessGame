const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess === secretNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        document.getElementById('guess').setAttribute('disabled', 'true');
    } else if (userGuess < secretNumber) {
        document.getElementById('message').textContent = 'Try a higher number.';
    } else {
        document.getElementById('message').textContent = 'Try a lower number.';
    }
}