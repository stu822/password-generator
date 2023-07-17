// prettier-ignore
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_'];
// prettier-ignore
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberChoice = document.querySelector("#number-choice").value;
  const selectedOptions = [];
  const options = document.getElementsByName("option");

  for (let option of options) {
    if (option.checked) {
      selectedOptions.push(option.value);
    }
  }

  console.log(numberChoice, selectedOptions);
});

function randomCharacter(arr) {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
