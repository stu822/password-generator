// prettier-ignore
const symbol = ['!', '@', '#', '$', '%', '^', '&', '-', '_'];
// prettier-ignore
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const form = document.querySelector("#form");
const passwordDisplay = document.querySelector("#password");

generatePassword(12, ["symbol", "numbers", "lowercase", "uppercase"]);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberChoice = document.querySelector("#number-choice").value;
  const options = document.getElementsByName("option");
  const selectedOptions = [];
  const optionsArr = [...options];

  if (!optionsArr.some((option) => option.checked)) {
    alert("Please select character options");
  } else {
    for (let option of options) {
      if (option.checked) {
        selectedOptions.push(option.value);
      }
    }
    generatePassword(numberChoice, selectedOptions);
  }
});

function randomSelection(arr) {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function generatePassword(numberChoice, selectedOptions) {
  let password;

  for (let i = 0; i <= numberChoice; i++) {
    const chacterType = randomSelection(selectedOptions);
    let character;
    if (chacterType === "lowercase") {
      character = randomSelection(alphabet);
    } else if (chacterType === "uppercase") {
      const uppercase = randomSelection(alphabet);
      character = randomSelection(uppercase.toUpperCase());
    } else if (chacterType === "symbol") {
      character = randomSelection(symbol);
    } else {
      character = randomSelection(numbers);
    }
    i === 0 ? (password = character) : (password += character);
  }
  passwordDisplay.textContent = password;
}
