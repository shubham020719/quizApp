// script.js
const questions = [
    {
        question: " What is the highest common factor of the numbers 30 and 132?",
        options: ["5", "6", "7", "4"],
        answer: 1
    },
    {
        question: "123+4-5+67-89 = ? ",
        options: ["100", "105", "599", "99"],
        answer: 0
    },
    {
        question: "From the number 0 to the number 1000, the letter “A” appears only in?",
        options: ["100", "3000", "1050", "1000"],
        answer: 3
    }
    ,
    {
        question: "If 1=3, 2=3, 3=5, 4=4, and 5=4, what is 6=? ",
        options: ["5", "-8", "-3", " 2"],
        answer: 2
    }
    ,
    {
        question: "Which number is the equivalent to 3^(4)/3^(2)?",
        options: ["0", "9", "-9", "56"],
        answer: 1
    }

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerOptionsElement = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    answerOptionsElement.innerHTML = ""; // Clear previous options
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        answerOptionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = `You got ${score} out of ${questions.length} correct!`;
    answerOptionsElement.innerHTML = ""; // Clear answer options
    nextButton.style.display = "none"; // Hide next button
}

nextButton.addEventListener("click", () => {
    checkAnswer(null); // Move to the next question without checking the answer
});

loadQuestion(); // Load the first question when the page loads