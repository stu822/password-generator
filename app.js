// prettier-ignore
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '-', '_'];
// prettier-ignore
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const form = document.querySelector("#form");
const password = document.querySelector("#password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberChoice = document.querySelector("#number-choice").value;
  let generatedPassword;
  const selectedOptions = [];
  const options = document.getElementsByName("option");

  for (let option of options) {
    if (option.checked) {
      selectedOptions.push(option.value);
    }
  }

  for (let i = 0; i <= numberChoice; i++) {
    const chacterType = randomSelection(selectedOptions);

    if (i === 0) {
      if (chacterType === "lowercase") {
        generatedPassword = randomSelection(alphabet);
      } else if (chacterType === "uppercase") {
        const uppercase = randomSelection(alphabet);
        generatedPassword = randomSelection(uppercase.toUpperCase());
      } else if (chacterType === "symbol") {
        generatedPassword = randomSelection(specialCharacters);
      } else {
        generatedPassword = randomSelection(numbers);
      }
    } else {
      if (chacterType === "lowercase") {
        generatedPassword += randomSelection(alphabet);
      } else if (chacterType === "uppercase") {
        const uppercase = randomSelection(alphabet);
        generatedPassword += randomSelection(uppercase.toUpperCase());
      } else if (chacterType === "symbol") {
        generatedPassword += randomSelection(specialCharacters);
      } else {
        generatedPassword += randomSelection(numbers);
      }
    }
  }

  password.textContent = generatedPassword;
});

function randomSelection(arr) {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
