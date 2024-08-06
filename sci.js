// script.js
const questions = [
    {
        question: "How many colors are in the rainbow?",
        options: ["5", "8", "7", "4"],
        answer: 2
    },
    {
        question: "What is the name of the tallest grass on earth?",
        options: ["Wheat", "Bamboo", "Sugarcane", "Corn"],
        answer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: 2
    }
    ,
    {
        question: "Which freezes faster, hot water or cold water?",
        options: ["Hot Water", "Cold water", " They freeze at the same time", " It depends on the container"],
        answer: 0
    }
    ,
    {
        question: "How many bones do sharks have in their bodies?",
        options: ["0", "206", "102", "56"],
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