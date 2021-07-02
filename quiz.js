// Use this to prevent generating same question twice
const generateUniqueNumber = function (num, array) {
  let randomNumber = Math.floor(Math.random() * num);
  while (array.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * num);
  }
  array.push(randomNumber);
  return randomNumber;
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

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
const questionContainer = document.getElementById("grid-questions-container");

let score = 0;

// const getCurrentlySelectedQuestion = function () {
//   return document.querySelector(".selected");
// };

// const selectedQuestion = document.getElementsByClassName("selected")[]

// const currentlySelectedQuestion = getCurrentlySelectedPhone() // Looking for any "selected" day in the page
//   if (currentlySelectedPhoneNode !== null) { // If there is any selected day...
//       currentlySelectedPhoneNode.classList.remove("selected") // ...we remove the "selected" class from it
//   }

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

const displayQuestion = function (object) {
  let question = document.createElement("section");

  question.innerHTML = `<h3 class="question">${object.question}</h3>`;
  question.classList.add("question-container");

  questionContainer.appendChild(question);

  let possibleAnswers = object.incorrect_answers;
  let correctAnswer = object.correct_answer;
  possibleAnswers.push(correctAnswer);
  shuffleArray(possibleAnswers);
  console.log(possibleAnswers);

  for (i = 0; i < possibleAnswers.length; i++) {
    let newAnswer = document.createElement("button");
    newAnswer.innerText = possibleAnswers[i];
    newAnswer.classList.add("answer");
    if (possibleAnswers[i] == correctAnswer) {
      newAnswer.classList.add("correct");
    }
    questionContainer.appendChild(newAnswer);
    console.log(newAnswer);
  }
};

const questions = [
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Capital of Ireland?",
    correct_answer: "Dublin",
    incorrect_answers: ["Belfast", "Glasgow", "Edinburgh"],
  },
];

displayQuestion(questions[0]);
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the Capital of Belgium?",
//     correct_answer: "Brussells",
//     incorrect_answers: [
//       "Bruges",
//       "Ghent",
//       "Belgium City",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the Capital of France?",
//     correct_answer: "Paris",
//     incorrect_answers: [
//       "Marseilles",
//       "Lyon",
//       "France City",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the Capital of Spain?",
//     correct_answer: "Madrid",
//     incorrect_answers: [
//       "Valencia",
//       "Barcelona",
//       "Spain",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What is the Capital of Italy?",
//     correct_answer: "Rome",
//     incorrect_answers: [
//       "Milan",
//       "Naples",
//       "Italy City",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "medium",
//     question: "What is the Capital of Romania?",
//     correct_answer: "Bucharest",
//     incorrect_answers: [
//       "Budapest",
//       "Brașov",
//       "Romania City",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "difficult",
//     question: "What is the Capital of Cameroon?",
//     correct_answer: "Yaoundé",
//     incorrect_answers: [
//       "Bamenda",
//       "Douala",
//       "Cameroon City",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "medium",
//     question: "What is the Capital of Peru?",
//     correct_answer: "Lima",
//     incorrect_answers: [
//       "Bogota",
//       "La Paz",
//       "Peru City",
//     ]
//   },
// {
//     category: "Geography",
//     type: "multiple",
//     difficulty: "difficult",
//     question: "What is the Capital of Guatamala?",
//     correct_answer: "Guatamala City",
//     incorrect_answers: [
//       "Quetzaltenango",
//       "Antigua",
//       "San Juan",
//     ]
//   },
//     category: "Geography",
//     type: "multiple",
//     difficulty: "medium",
//     question: "What is the Capital of Nigeria?",
//     correct_answer: "Abuja",
//     incorrect_answers: [
//       "Lagos",
//       "Ibadan",
//       "Benin City",
//     ]
//   },
