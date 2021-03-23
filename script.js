var startButton = document.getElementById("startButton")
var startPage = document.getElementById("startPage")
var question = document.getElementById("question")
var questionDiv = document.getElementById("questionDiv")
var endPage = document.getElementById("endPage")
var correctPage = document.getElementById("correct")
var incorrectPage = document.getElementById("incorrect")
var buttonDiv = document.getElementById("buttonDiv")

var questionVar = document.createElement("div")

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

startButton.onclick = startQuiz

function startQuiz() {
    startPage.setAttribute("style","display: none");
    question.setAttribute("style", "display: flex", "flex: reverse-column");

    questionVar.textContent = question_objects[0].name;
    questionDiv.appendChild(questionVar)

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
    questionVar.textContent = question_objects[1].name
    questionDiv.appendChild(questionVar)

    correctPage.setAttribute("style","display: block")
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

    questionVar.textContent = question_objects[1].name
    questionDiv.appendChild(questionVar)

    correctPage.setAttribute("style", "display: none")
    incorrectPage.setAttribute("style","display: block")
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

    questionVar.textContent = question_objects[2].name
    question.appendChild(questionVar)

    correctPage.setAttribute("style","display: block")
    incorrectPage.setAttribute("style", "display: none")
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
    console.log("I am on inorrectanswer2")
    questionVar.textContent = question_objects[2].name
    question.appendChild(questionVar)

    incorrectPage.setAttribute("style","display: block")
    correctPage.setAttribute("style", "display: none")
    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

    console.log(button2.textContent)
    button2.onclick = endQuizCorrect
    button1.onclick = endQuizIncorrect
    button3.onclick = endQuizIncorrect
    button4.onclick = endQuizIncorrect
}

function endQuizCorrect() {
    correctPage.setAttribute("style", "display: block")
    incorrectPage.setAttribute("style", "display: none")
    question.setAttribute("style", "display: none")
    endPage.setAttribute("style", "display: block")

}

function endQuizIncorrect() {
    incorrectPage.setAttribute("style","display: block")
    correctPage.setAttribute("style", "display: none")
    question.setAttribute("style", "display: none")
    endPage.setAttribute("style", "display: block")

}