const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// ---- Main Logic and Function Begins -----//
const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  result.innerText = remainders.reverse().join("");
};
// ---- Main Logic and Function End -----//
const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    result.style.font = "17px Arial, sans-serif";
    result.style.textTransform = "uppercase";
    // result.style.color = "Red";
    result.innerHTML = "Please provide a decimal number";
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

// const countDownAndUp = (number) => {
//     console.log(`Value after recursion: ${number}`);
  
//     if (number === 0) {
//       console.log(`Reached base case ${number}`)
//         return;
//     } else {
//       countDownAndUp(number - 1);
//       console.log(number);
//     }
//   };
  
//   countDownAndUp(3);