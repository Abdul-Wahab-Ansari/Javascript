## Number Guessing Game

### Introduction
This is a simple number guessing game implemented in JavaScript. The game allows the player to guess a number between 1 and 100 and provides feedback based on the correctness of the guess. The player has a total of 20 attempts to guess the number correctly. Each incorrect guess results in a deduction of the score.

### Code Explanation
The JavaScript code (`script.js`) contains the logic for the game. Here's a brief explanation of the key components:

1. **Variables**: 
   - `secretNumber`: Generates a random number within the specified range as the secret number to be guessed.
   - `attempts`: Tracks the number of attempts made by the player.

2. **DOM Elements**: 
   - `guessInput`: Represents the input field where the player enters their guess.
   - `submitBtn`: Represents the button used to submit the guess.
   - `feedbackDisplay`: Represents the area where feedback messages are displayed to the player.

3. **Event Listener**: 
   - `submitBtn.addEventListener('click', () => { ... })`: Listens for clicks on the submit button and triggers the game logic.
   - `hiddenBtn.addEventListener("click", () => { ... })`: Resets all the Elements to thier default values and Starts the game again.

4. **Game Logic**:
   - Validates the user input to ensure it's within the valid range.
   - Compares the user's guess with the secret number and provides appropriate feedback (too low, too high, or correct).
   - Updates the feedback display with the result of each guess.
   - Tracks the number of attempts made by the player.

5. **Feedback Display**: 
   - Displays feedback messages to the player based on their guesses and the outcome of each attempt.

### Usage
To play the game:
1. Open `index.html` in a web browser.
2. Enter a number between 1 and 100 into the input field.
3. Click the "Submit Guess" button to submit your guess.
4. Receive feedback on your guess and continue guessing until you find the correct number.
