// Use this to prevent generating same question twice

const body = document.getElementsByTagName("body")[0];
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("grid-questions-container");
const scoreDisp = document.getElementById("score");

let score = 0;
let questionCounter = 0;
let alreadyAskedQuestion = [];

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

const increaseScore = function () {
  score++;
  scoreDisp.innerText = `Score: ${score}`;
};

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

    if (possibleAnswers[i] == correctAnswer) {
      newAnswer.classList.add("correct");
      newAnswer.addEventListener("click", increaseScore);
    }
    question.appendChild(newAnswer);
    newAnswer.addEventListener("click", newQuestion);
    // console.log(newAnswer);
  }
};

const newQuestion = function () {
  questionCounter++;
  console.log(questionCounter);
  if (questionCounter > 1 && score > 0) {
    scoreDisp.classList.remove("hidden");
  }
  let currentlySelectedQuestion = document.querySelector(".selected");
  currentlySelectedQuestion.remove();

  if (questionCounter === 11) {
    gameOver();
  }
  let questionNum = generateUniqueNumber(
    questions.length,
    alreadyAskedQuestion
  );
  // displayScore();
  displayQuestion(questions[questionNum]);
};

const gameOver = function () {
  body.classList = "";
  body.classList.add("welcome");
  quizContainer.innerHTML = "";
  let gameOverScreen = document.createElement("section");
  gameOverScreen.innerHTML = `<h2>GAME OVER</h2> <h3>${score}/ ${
    questionCounter - 1
  }</h3>`;
  gameOverScreen.classList.add("game-over");
  quizContainer.appendChild(gameOverScreen);
};

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
  {
    country: "italy",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Capital of Mexico?",
    correct_answer: "Mexico City",
    incorrect_answers: ["Guadalupe", "San Diego", "Buenas Aires"],
  },
];
