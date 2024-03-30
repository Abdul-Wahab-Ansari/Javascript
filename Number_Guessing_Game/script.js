const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedbackDisplay = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const hiddenBtn = document.getElementById("play-again-btn");

let score = 20;
let attempts = 0;
let secretNumber = Math.floor(Math.random() * 100) + 1;

submitBtn.addEventListener("click", () => {

  const userInput = parseInt(guessInput.value);

  if(userInput){
    if (attempts < 20) {
      if(userInput > 0 && userInput <= 100){
        if (userInput === secretNumber) {
          attempts += 1;
          feedbackDisplay.textContent = `You guessed the right number ${secretNumber} in ${attempts} attempts`;
          guessInput.disabled = true;
          submitBtn.disabled = true;
          hiddenBtn.classList.remove("hide");
          attempts += 2;
          // console.log(attempts);
          return;
        } else if (userInput < secretNumber) {
          attempts += 1;
          score--;
          feedbackDisplay.textContent = "Too Low";
          scoreDisplay.textContent = `Score: ${score}`;
        } else if (userInput > secretNumber) {
          attempts += 1;
          score--;
          feedbackDisplay.textContent = "Too High";
          scoreDisplay.textContent = `Score: ${score}`;
        }
      }else{
        feedbackDisplay.textContent = `Please enter a number between 1 and 100`
      }
    } else {
      feedbackDisplay.textContent = `Game Over You've Reached ${attempts} attempts`;
      feedbackDisplay.style.color = "Red";
      feedbackDisplay.style.fontWeight = "Bold";
      hiddenBtn.classList.remove("hide");
    }
  }else{
    feedbackDisplay.textContent = 'Please input a number'
  }
});

hiddenBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.disabled = false;
  guessInput.value = ''
  submitBtn.disabled = false;
  attempts = 0;
  score = 20;
  scoreDisplay.textContent = `Score: ${score}`;
  feedbackDisplay.textContent = "";
  feedbackDisplay.style.color = "#000";
  feedbackDisplay.style.fontWeight = "normal";
});
