var questions = [
    "What is a group of letters of numbers in quotation marks called in Javascript?",
    "What is a set of steps/plan to solve a problem called?",
    "What is the terminal demand to remove a file from a repository?",
    ]

var correctAnswers = [
    "A string",
    "An algorithm",
    "rm"]

var incorrectAnswers = [
    "DOM",
    "object",
    "array",
    "list",
    "tuple",
    "dictionary",
    "set",
    "equation",
    "word bank",
]

var questionDisplayed = document.getElementById("question")

questionDisplayed.textContent = questions[2]

// getting a random number from a list to concatenate it to "button"
var list = [1,2,3,4]
randomNumber = list[Math.floor(Math.random() * list.length)]

var concatenation = ("button"+randomNumber)
console.log(concatenation)

// selecting the button, which is randomly chosen
var correctAnswerDisplayed = document.getElementById(concatenation)

// changing the text content of the randomly chosen button 
correctAnswerDisplayed.textContent = correctAnswers[2]

