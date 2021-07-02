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
const irelandQ = document.getElementById("irelandQ");
const franceQ = document.getElementById("franceQ");
const italyQ = document.getElementById("italyQ");
const spainQ = document.getElementById("spainQ");
const belgiumQ = document.getElementById("belgiumQ");
const romaniaQ = document.getElementById("romaniaQ");
const cameroonQ = document.getElementById("cameroonQ");
const peruQ = document.getElementById("peruQ");
const guatemalaQ = document.getElementById("guatemalaQ");
const nigeriaQ = document.getElementById("nigeriaQ");
const gameOver = document.getElementById("game-over");
const seeScoreButton = document.getElementById("see-score");

let score = 0;

const displayFirstQuestion = function () {
  welcomePage.remove();
  body.classList.remove("welcome");
  body.classList.add("ireland");
  irelandQ.classList.remove("hidden");
};

const answerIrelandQ = function () {
  irelandQ.classList.add("hidden");
  belgiumQ.classList.remove("hidden");
  body.classList.remove("ireland");
  body.classList.add("belgium");
};

const answerBelgiumQ = function () {
  //1
  belgiumQ.classList.add("hidden"); //1
  franceQ.classList.remove("hidden"); //2
  body.classList.remove("belgium"); //1
  body.classList.add("france"); //2
};

const answerFranceQ = function () {
  franceQ.classList.add("hidden");
  spainQ.classList.remove("hidden");
  body.classList.remove("france");
  body.classList.add("spain");
};

const answerSpainQ = function () {
  //1
  spainQ.classList.add("hidden"); //1
  italyQ.classList.remove("hidden"); //2
  body.classList.remove("spain"); //1
  body.classList.add("italy"); //2
};

const answerItalyQ = function () {
  italyQ.classList.add("hidden");
  romaniaQ.classList.remove("hidden");
  body.classList.remove("italy");
  body.classList.add("romania");
};

const answerRomaniaQ = function () {
  //1
  romaniaQ.classList.add("hidden"); //1
  cameroonQ.classList.remove("hidden"); //2
  body.classList.remove("romania"); //1
  body.classList.add("cameroon"); //2
};

const answerCameroonQ = function () {
  //1
  cameroonQ.classList.add("hidden"); //1
  peruQ.classList.remove("hidden"); //2
  body.classList.remove("cameroon"); //1
  body.classList.add("peru"); //2
};

const answerPeruQ = function () {
  //1
  peruQ.classList.add("hidden"); //1
  guatamalaQ.classList.remove("hidden"); //2
  body.classList.remove("peru"); //1
  body.classList.add("guatamala"); //2
};

const answerGuatamalaQ = function () {
  //1
  guatamalaQ.classList.add("hidden"); //1
  nigeriaQ.classList.remove("hidden"); //2
  body.classList.remove("guatamala"); //1
  body.classList.add("nigeria"); //2
};

const answerNigeriaQ = function () {
  //1
  nigeriaQ.classList.add("hidden"); //1 //2
  gameOver.classList.remove("hidden"); //1
  body.classList.remove("nigeria");
  body.classList.add("welcome");
  // const gameOverScore = document.createElement("h3");
  // gameOverScore.innerHTML = `${score} / 10`;
  // gameOver.appendChild(gameOverScore);
};

const seeScore = function () {
  seeScoreButton.remove();
  const gameOverScore = document.createElement("h3");
  gameOverScore.innerHTML = `${score} / 10`;
  gameOver.appendChild(gameOverScore);
};

// const answerQ = function () { //1
//   Q.classList.add("hidden"); //1
//   .classList.remove("hidden"); //2
//   body.classList.remove(""); //1
//   body.classList.add(""); //2
// };

const increaseScore = function () {
  score++;
  console.log(score);
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
