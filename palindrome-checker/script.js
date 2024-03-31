const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (userInput) => {
  const lowerCaseStr = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  const charArray = [...lowerCaseStr].reverse().join("");

  if (userInput === "") {
    alert("Please input a value");
  }
  else if (charArray === lowerCaseStr) {
    result.innerHTML = `<b>${userInput}</b> is Palindrome`;
  } else {
    result.innerHTML = `<b>${userInput}</b> is not a Palindrome`;
  }
};

checkButton.addEventListener("click", () => {
    
  isPalindrome(textInput.value);
  textInput.value = "";
});
