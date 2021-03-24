// DOM VARIABLES -- SELECTING ELEMENTS 
var startButton = document.getElementById("startButton")
var startPage = document.getElementById("startPage")
var endPage = document.getElementById("endPage")
var correctPage = document.getElementById("correct")
var incorrectPage = document.getElementById("incorrect")
var buttonSelect = document.querySelectorAll("button")
var question = document.getElementById("question")
var pointCount = document.getElementById("pointCount")
var highScorePage = document.getElementById("highScorePage")
var initials = document.getElementById("initials")
var hiScore = document.getElementById("hiScore")
var submitButton = document.getElementById("submitButton")
var goBack = document.getElementById("goBack")
var clearHiScores = document.getElementById("clearHiScores")
// var timer = document.getElementById("timer")

// GlOBAL VARIABLES
var count = 100
var points = 0

var initialArray = []
var scoreArray = []

// localStorage.setItem(initialArray)
// localStorage.setItem(scoreArray)

// var initialArray = localStorage.getItem("initialArray")
// var scoreArray = localStorage.getItem("scoreArray")

// This is an array of objects, and in the "answer" key-value pairs, the values are arrays.
// It's three objects within an array.
var question_objects = [
    {name: "What is HTML?",
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

    question.style.display = "block"
    answers.style.display = "block"
    timer.textContent = count

    question.textContent = question_objects[0].name

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
    question.textContent = question_objects[1].name

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
    question.textContent = question_objects[1].name

    correctPage.style.display = "none"
    incorrectPage.style.display = "block"

    button1.textContent = question_objects[1].answers[0]
    button2.textContent = question_objects[1].answers[1]
    button3.textContent = question_objects[1].answers[2]
    button4.textContent = question_objects[1].answers[3]

    button4.addEventListener("click", () => {
        addPoint();
        correctAnswer2()
    })
    
    button2.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer2(); 
    })

    button3.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer2(); 
    })

    button1.addEventListener("click",() => {    
        subtractTime();
        incorrectAnswer2(); 
    })
}

// This function is called if the user gets the second question right. 
// The correct banner is displayed.
function correctAnswer2() {
    question.textContent = question_objects[2].name

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

    button1.addEventListener("click", () => {
        endQuizIncorrect()
        subtractTime()
    })

    button3.addEventListener("click", () => {
        endQuizIncorrect()
        subtractTime()
    })

    button4.addEventListener("click", () => {
        endQuizIncorrect()
        subtractTime()
    })
}

// This function is called if the user gets the second question wrong. 
// The incorrect banner is displayed.
function incorrectAnswer2() {
    question.textContent = question_objects[2].name

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

    button1.addEventListener("click", () => {
        endQuizIncorrect()
        subtractTime()
    })

    button3.addEventListener("click", () => {
        endQuizIncorrect()
        subtractTime()
    })

    button4.addEventListener("click", () => {
        endQuizIncorrect()
        subtractTime()
    })
}

// This function is called if the user gets the third question right.
// The quiz is ended and irrelevant pages/banners are hidden.
function endQuizCorrect() {
    correctPage.style.display = "block"
    incorrectPage.style.display = "none"
    question.style.display = "none"
    endPage.style.display = "block"
    answers.style.display = "none"
    pointCount.textContent = points

    // submitButton.onclick = function() {
    //     var inputVal = document.getElementById("myInput");
    //     alert(myInput.value);
    // }
    submitButton.addEventListener("click", gettingInputVal) 
}

// This function is called if the user gets the third question wrong.
// The quiz is ended and irrelevant pages/banners are hidden.
function endQuizIncorrect() {
    incorrectPage.style.display = "block"
    correctPage.style.display = "none"
    question.style.display = "none"
    endPage.style.display = "block"
    answers.style.display = "none"
    pointCount.textContent = points

    submitButton.onclick = gettingInputVal
}

function gettingInputVal() {
    initialArray.push(myInput.value)
    console.log(initialArray)

    scoreArray.push(points)
    console.log(points)

    endPage.style.display = "none"
    highScorePage.style.display = "block"
    incorrectPage.style.display = "none"
    correctPage.style.display = "none"

    initials.textContent = myInput.value;
    hiScore.textContent = points

    goBack.onclick = reinitialize
}

// here we start the game over by reinitializing the start screen
// and hiding the hi score page screen
function reinitialize() {
    startPage.style.display = "block"
    highScorePage.style.display = "none"
}

localStorage.getItem(initialArray)
localStorage.getItem(scoreArray)

// now that we know how to store the initials and the score into arrays, 
// we need to figure out how to store them locally,
// need to make a for loop to iterate through the initials array and the score array
// and print them out in pairs
//  ----question: how do we do this without overriding


