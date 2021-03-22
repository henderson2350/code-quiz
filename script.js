var startButton = document.getElementById("startButton")
var startPage = document.getElementById("startPage")
var question = document.getElementById("question")
var questionDiv = document.getElementById("questionDiv")
var endPage = document.getElementById("endPage")

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
var questionVar = document.createElement("div")

function startQuiz() {
    startPage.setAttribute("style","display: none");
    question.setAttribute("style", "display: block");

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


    button1.textContent = question_objects[1].answers[0]
    button2.textContent = question_objects[1].answers[1]
    button3.textContent = question_objects[1].answers[2]
    button4.textContent = question_objects[1].answers[3]

    button2.onclick = correctAnswer2
    button1.onclick = incorrectAnswer2
    button3.onclick = incorrectAnswer2
    button4.onclick = incorrectAnswer2
}

function correctAnswer2() {

    questionVar.textContent = question_objects[2].name

    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

    button2.onclick = endQuiz
}

function incorrectAnswer2() {
    questionVar.textcocntent = question_objects[2].name

    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

}

function endQuiz() {
    question.setAttribute("style", "display: none")
    endPage.setAttribute("style", "display: block")

}