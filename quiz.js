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
// const questionContainer = document.getElementById("grid-questions-container");
const questionContainer = document.getElementById("grid-questions-container");

let score = 0;

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

// let correctQuestionAnswer = document.getElementsByClassName("correct")[0]
// correctQuestionAnswer.addEventListener("click", increaseScore)

const increaseScore = function () {
  score++;
  console.log(score);
};

// let displayScore = function () {
//   let score = document.querySelector(".score");
//   if (score) {
//     let displayedScore = document.createElement("h2");
//     displayedScore.classList.add("score");
//     displayedScore.innerText = `Score: ${score}`;
//     questionContainer.appendChild(displayedScore);
//   }
// };

const displayQuestion = function (object) {
  // Clear background color
  body.classList = "";
  // Display new background color
  body.classList.add(object.country);

  // Generate new question
  let question = document.createElement("section");
  question.innerHTML = `<h3 class="question">${object.question}</h3>`;
  question.classList.add("question-container");
  question.classList.add("selected");
  questionContainer.appendChild(question);

  // Generate answer buttons
  let possibleAnswers = object.incorrect_answers;
  let correctAnswer = object.correct_answer;
  possibleAnswers.push(correctAnswer);
  shuffleArray(possibleAnswers);
  // console.log(possibleAnswers);
  for (i = 0; i < possibleAnswers.length; i++) {
    let newAnswer = document.createElement("button");
    newAnswer.innerText = possibleAnswers[i];
    // newAnswer.classList.add("answer")
    newAnswer.classList.add("answer");
    newAnswer.addEventListener("click", increaseScore);
    if (possibleAnswers[i] == correctAnswer) {
      newAnswer.classList.add("correct");
    }
    question.appendChild(newAnswer);
    newAnswer.addEventListener("click", newQuestion);
    // console.log(newAnswer);
  }
};

let alreadyAskedQuestion = [];

const newQuestion = function () {
  let currentlySelectedQuestion = document.querySelector(".selected");
  currentlySelectedQuestion.remove();
  let questionNum = generateUniqueNumber(
    questions.length,
    alreadyAskedQuestion
  );
  // displayScore();
  displayQuestion(questions[questionNum]);
};

// let answers = document.getElementsByClassName("answer");

const questions = [
  {
    country: "ireland",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Capital of Ireland?",
    correct_answer: "Dublin",
    incorrect_answers: ["Belfast", "Glasgow", "Edinburgh"],
  },
  {
    country: "belgium",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Capital of Belgium?",
    correct_answer: "Brussells",
    incorrect_answers: ["Bruges", "Ghent", "Belgium City"],
  },
  {
    country: "france",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Capital of France?",
    correct_answer: "Paris",
    incorrect_answers: ["Marseilles", "Lyon", "France City"],
  },
  {
    country: "spain",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Capital of Spain?",
    correct_answer: "Madrid",
    incorrect_answers: ["Valencia", "Barcelona", "Spain"],
  },
  {
    country: "italy",
    type: "multiple",
    difficulty: "easy",
    question: "What is the Capital of Italy?",
    correct_answer: "Rome",
    incorrect_answers: ["Milan", "Naples", "Italy City"],
  },
  {
    country: "romania",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Capital of Romania?",
    correct_answer: "Bucharest",
    incorrect_answers: ["Budapest", "Brașov", "Romania City"],
  },
  {
    country: "cameroon",
    type: "multiple",
    difficulty: "difficult",
    question: "What is the Capital of Cameroon?",
    correct_answer: "Yaoundé",
    incorrect_answers: ["Bamenda", "Douala", "Cameroon City"],
  },
  {
    country: "peru",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Capital of Peru?",
    correct_answer: "Lima",
    incorrect_answers: ["Bogota", "La Paz", "Peru City"],
  },
  {
    country: "guatamala",
    type: "multiple",
    difficulty: "difficult",
    question: "What is the Capital of Guatamala?",
    correct_answer: "Guatamala City",
    incorrect_answers: ["Quetzaltenango", "Antigua", "San Juan"],
  },
  {
    country: "nigeria",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Capital of Nigeria?",
    correct_answer: "Abuja",
    incorrect_answers: ["Lagos", "Ibadan", "Benin City"],
  },
];
