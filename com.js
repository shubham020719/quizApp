// script.js
const questions = [
    {
        question: "Who is the Father of the Computer?",
        options: ["Charles Babbage", "Thomas Edison", "Albert Einstein", "Isaac Newton"],
        answer: 0
    },
    {
        question: "What is the full form of E-Mail?",
        options: ["Electric Mail", "Exchange Mail", "Electronic Mail", "Engagement Mail"],
        answer: 2
    },
    {
        question: "In the virtual world, WWW stands for",
        options: ["World Without Windows", "World Wide Web", "World Wide Web Applications", "World Wide Warehouse"],
        answer: 1
    }
    ,
    {
        question: "Which one of the following is not an Operating System (OS)?",
        options: ["Windows 10", "Linux", " DOS", " MS Excel"],
        answer: 3
    }
    ,
    {
        question: "How much is a byte equal to?",
        options: ["8 bits", "16 bits", "32 bits", "64 bits"],
        answer: 0
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