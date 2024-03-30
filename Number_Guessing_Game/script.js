const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedbackDisplay = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const hiddenBtn = document.getElementById("play-again-btn");

let score = 20;
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100) + 1;

submitBtn.addEventListener("click", () => {
  console.log(randomNum);
  const userInput = parseInt(guessInput.value);

  if(userInput){
    if (attempts < 20) {
      if (userInput === randomNum) {
        attempts += 1;
        feedbackDisplay.textContent = `You guessed the right number ${randomNum} in ${attempts} attempts`;
        guessInput.disabled = true;
        submitBtn.disabled = true;
        hiddenBtn.classList.remove("hide");
        attempts += 2;
        console.log(attempts);
        return;
      } else if (userInput < randomNum) {
        attempts += 1;
        score--;
        feedbackDisplay.textContent = "Too Low";
        scoreDisplay.textContent = `Score: ${score}`;
      } else if (userInput > randomNum) {
        attempts += 1;
        score--;
        feedbackDisplay.textContent = "Too High";
        scoreDisplay.textContent = `Score: ${score}`;
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
  randomNum = Math.floor(Math.random() * 100) + 1;
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
