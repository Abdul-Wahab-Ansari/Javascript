const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedbackDisplay = document.getElementById("feedback");
const scoreDisplay = document.getElementById('score');
const hiddenBtn = document.querySelector('.hide')

try {
  submitBtn.addEventListener("click", () => {
    const userInput = parseInt(guessInput.value);
    let maxAttempts = 3;
    let attempts = 0;
    let score = 20;
  if (userInput) {
  if (attempts < maxAttempts) {
    if (userInput != randomNum) {
      attempts += 1;
      score--;
      feedbackDisplay.textContent = `You guessed the wrong number ${userInput} you've remaining ${maxAttempts - attempts} attempts.`;
      scoreDisplay.textContent = `Score: ${score}`
    } else {
      feedbackDisplay.textContent = `You guessed the right number ${randomNum}`
    }
  } else {
    feedbackDisplay.textContent = `Game Over You've Reached ${attempts}`;
    feedbackDisplay.style.color += "Red";
    feedbackDisplay.style.fontWeight = "Bold";
  }
    
    } else {
      feedbackDisplay.textContent = "Please enter a number";
      // guessChecker(userInput);
    }
  });
} catch (error) {
  console.log(error);
}

// Main logic

// Random Number
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

const guessChecker = (input) => {
  
};
