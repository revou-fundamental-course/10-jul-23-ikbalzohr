// Get Element HTML by ID
let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("male");
let female = document.getElementById("female");
let form = document.getElementById("form");
let modal = document.getElementById("myModal");
// End Element HTML by ID

// Query querySelector
let resultArea = document.querySelector(".comment");
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
// End querySelector

// Get By className
let span = document.getElementsByClassName("close")[0];
// End Element By Class Name

// Function calculate
function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = "All Field Are Required!";
  } else {
    countBmi();
  }
}

function countBmi() {
  //Create array and value array
  let p = [age.value, height.value, weight.value];

  // conditional for checked
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  // Rumus calculate IMT
  let bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  let result = ""; // Variabel Hasil

  //   Conditional Berat Badan
  if (bmi < 18.5) {
    result = "Underwight";
  } else if (18.5 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely Obese";
  }

  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `You are <span id ="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Function click close
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};