// Use this to prevent generating same question twice
const generateUniqueNumber = function (array) {
  let randomNumber = Math.floor(Math.random() * 76 + 1);
  while (array.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 76 + 1);
  }
  array.push(randomNumber);
  return randomNumber;
};

const welcomePage = document.getElementById("welcome-page");
const body = document.getElementsByTagName("body")[0];

const displayFirstQuestion = function () {
  welcomePage.remove();
  body.classList.remove("welcome");
  body.classList.add("ireland");
  let newQuesion = document.createElement("section");

  newQuesion.innerHTML = `<h3 class="question">Q: What is the capital of Ireland?</h3>
  <button class="answer">A: Cork</button>
  <button class="answer">B: Limerick</button>
  <button class="answer">C: Dublin</button>
  <button class="answer">D: Galway</button>`;
  newQuestion.classList.add("question-container");
};

// const questions = {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the Capital of Spain?",
//     correct_answer: "Dublin",
//     incorrect_answers: [
//       "Cork",
//       "Limerick",
//       "Galway",
//     ]
//   },
