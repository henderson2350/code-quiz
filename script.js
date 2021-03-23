// DOM VARIABLES -- SELECTING ELEMENTS 
var startButton = document.getElementById("startButton")
var startPage = document.getElementById("startPage")
var endPage = document.getElementById("endPage")
var correctPage = document.getElementById("correct")
var incorrectPage = document.getElementById("incorrect")
var buttonSelect = document.querySelectorAll("button")
var question2 = document.getElementById("question2")
var pointCount = document.getElementById("pointCount")
// var timer = document.getElementById("timer")

// GlOBAL VARIABLES
var count = 100
var points = 0

// This is an array of objects, and in the "answer" key-value pairs, the values are arrays.
// It's three objects within an array.
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

// Starting the quiz and the timer by using event listener for a click on the startButton
startButton.addEventListener('click',() => {    
    startQuiz();
    startTimer();    
});

// FUNCTIONS

// This function starts the timer, which counts down from the count variable to zero,
// one second at a time.
function startTimer() {
    var interval = setInterval(function() {
        console.log(count);
        timer.textContent = count
        count--;
        if (count === -1) {
            clearInterval(interval)
        }
    }, 1000) 
}

// This function adds a point to the score when the user gets a question correct.
function addPoint() {
    points++
}

// This function subtracts time from the timer when a question is wrong.
function subtractTime() {
    count -= 5
}
// This function starts the quiz by hiding the start page and showing the questions and answer buttons.
// Depending on the button the user clicks on, a function is called and they are taken to the
// next question.
function startQuiz() {
    startPage.style.display = "none"

    question2.style.display = "block"
    answers.style.display = "block"
    timer.textContent = count

    question2.textContent = question_objects[0].name

    button1.textContent = question_objects[0].answers[0]
    button2.textContent = question_objects[0].answers[1]
    button3.textContent = question_objects[0].answers[2]
    button4.textContent = question_objects[0].answers[3]

    button1.addEventListener("click",() => {    
        addPoint();
        correctAnswer1(); 
    });
    
    button2.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer1(); 
    });
    
    button3.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer1(); 
    });

    button4.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer1(); 
    });
}

// This function is called if the user gets the first question right. 
// The correct banner is displayed.
function correctAnswer1() {
    question2.textContent = question_objects[1].name

    correctPage.style.display = "block"

    button1.textContent = question_objects[1].answers[0]
    button2.textContent = question_objects[1].answers[1]
    button3.textContent = question_objects[1].answers[2]
    button4.textContent = question_objects[1].answers[3]

    button4.addEventListener("click", () => {
        addPoint();
        correctAnswer2()
    })

    button1.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer2(); 
    })

    button2.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer2(); 
    })

    button3.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer2(); 
    })
}

// This function is called if the user gets the first question wrong. 
// The incorrect banner is displayed.
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

// This function is called if the user gets the second question right. 
// The correct banner is displayed.
function correctAnswer2() {
    question2.textContent = question_objects[2].name

    correctPage.style.display = "block"
    incorrectPage.style.display = "none"

    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

    button2.addEventListener("click", () => {
        addPoint();
        endQuizCorrect()
    })

    button1.onclick = endQuizIncorrect
    button3.onclick = endQuizIncorrect
    button4.onclick = endQuizIncorrect
}

// This function is called if the user gets the second question wrong. 
// The incorrect banner is displayed.
function incorrectAnswer2() {
    console.log("hellow")
    question2.textContent = question_objects[2].name

    incorrectPage.style.display = "block"
    correctPage.style.display = "none"

    button1.textContent = question_objects[2].answers[0]
    button2.textContent = question_objects[2].answers[1]
    button3.textContent = question_objects[2].answers[2]
    button4.textContent = question_objects[2].answers[3]

    button2.addEventListener("click", () => {
        addPoint();
        endQuizCorrect()
    })
    button1.onclick = endQuizIncorrect
    button3.onclick = endQuizIncorrect
    button4.onclick = endQuizIncorrect
}

// This function is called if the user gets the third question right.
// The quiz is ended and irrelevant pages/banners are hidden.
function endQuizCorrect() {
    correctPage.style.display = "block"
    incorrectPage.style.display = "none"
    question2.style.display = "none"
    endPage.style.display = "block"
    answers.style.display = "none"
    pointCount.textContent = points

}

// This function is called if the user gets the third question wrong.
// The quiz is ended and irrelevant pages/banners are hidden.
function endQuizIncorrect() {
    incorrectPage.style.display = "block"
    correctPage.style.display = "none"
    question2.style.display = "none"
    endPage.style.display = "block"
    answers.style.display = "none"
    pointCount.textContent = points
}
