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
