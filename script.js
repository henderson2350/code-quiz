// DOM VARIABLES -- SELECTING ELEMENTS 
var startButton = document.getElementById("startButton")
var startPage = document.getElementById("startPage")
var endPage = document.getElementById("endPage")
var correctPage = document.getElementById("correct")
var incorrectPage = document.getElementById("incorrect")
var answerButtons = document.getElementById("answerButtons")
var buttonSelect = document.querySelectorAll("button")
var question2 = document.getElementById("question2")

// THIS IS AN ARRAY OF OBJECTS, AND INSIDE THOSE OBJECTS ARE KEY VALUE PAIRS--
// THE VALUES FOR "ANSWERS" ARE ARRAYS
var question_objects = [
    {name: "what is HTML?",
    answers: ["HyperText Markup Language", "hypnotic toad markup language", "Harris Teeter is My Life", "Harry styles"],
    correctedAnswers: "HyperText Markup Language"}, 

    {name: "What is a group of letters of numbers in quotation marks called in Javascript?",
    answers: ["DOM", "object", "array", "string"], 
    correctAnswers: "string"},

    {name:"What is the terminal demand to remove a file from a repository?",
    answers: ["object","rm","rf","mkdir"],
    correctAnswers: "rm"}
]

// STARTING THE QUIZ BY CALLING THE START QUIZ FUNCTION W/ ONCLICK OF THE start button
startButton.onclick = startQuiz

function startQuiz() {
    startPage.style.display = "none"

    question2.style.display = "block"
    answers.style.display = "block"

    question2.textContent = question_objects[0].name

    button1.textContent = question_objects[0].answers[0]
    button2.textContent = question_objects[0].answers[1]
    button3.textContent = question_objects[0].answers[2]
    button4.textContent = question_objects[0].answers[3]

    button1.onclick = correctAnswer1
    button2.onclick = incorrectAnswer1
    button3.onclick = incorrectAnswer1
    button4.onclick = incorrectAnswer1
}

function correctAnswer1() {
    question2.textContent = question_objects[1].name

    correctPage.style.display = "block"

    button1.textContent = question_objects[1].answers[0]
    button2.textContent = question_objects[1].answers[1]
    button3.textContent = question_objects[1].answers[2]
    button4.textContent = question_objects[1].answers[3]

    button4.onclick = correctAnswer2
    button1.onclick = incorrectAnswer2
    button2.onclick = incorrectAnswer2
    button3.onclick = incorrectAnswer2

}

function incorrectAnswer1() {
    question2.textContent = question_objects[1].name

    correctPage.style.display = "none"
    incorrectPage.style.display = "block"

    button1.textContent = question_objects[1].answers[0]
    button2.textContent = question_objects[1].answers[1]
    button3.textContent = question_objects[1].answers[2]
    button4.textContent = question_objects[1].answers[3]

    button2.onclick = incorrectAnswer2
    button1.onclick = incorrectAnswer2
    button3.onclick = incorrectAnswer2
    button4.onclick = correctAnswer2
}

function correctAnswer2() {
    question2.textContent = question_objects[2].name

    correctPage.style.display = "block"
    incorrectPage.style.display = "none"

    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

    button2.onclick = endQuizCorrect
    button1.onclick = endQuizIncorrect
    button3.onclick = endQuizIncorrect
    button4.onclick = endQuizIncorrect
}

function incorrectAnswer2() {
    question2.textContent = question_objects[2].name

    incorrectPage.style.display = "block"
    correctPage.style.display = "none"

    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

    console.log("hello")
    button2.onclick = endQuizCorrect
    button1.onclick = endQuizIncorrect
    button3.onclick = endQuizIncorrect
    button4.onclick = endQuizIncorrect
}

function endQuizCorrect() {
    correctPage.style.display = "block"
    inorrectPage.style.display = "none"
    question2.style.display = "none"
    endPage.style.display = "block"
    answerButtons.style.display = "none"

}

function endQuizIncorrect() {
    incorrectPage.style.display = "block"
    correctPage.style.display = "none"
    question2.style.display = "none"
    endPage.style.display = "block"
    answerButtons.style.display = "none"

}

// Formatting the buttons using javascript and our buttonSelect variable which
// includes all of the buttons on the page.
for (i = 0; i < buttonSelect.length; i++ ) {
    buttonSelect[i].style.backgroundColor = "violet";
    buttonSelect[i].style.color = "white";
    buttonSelect[i].style.padding = "10px";
    buttonSelect[i].style.borderColor = "blue"
}

