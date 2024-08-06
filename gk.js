// script.js
const questions = [
    {
        question: "What is the capital of India?",
        options: ["New Delhi", "Jharkhand", "West Bengal", "Bihar"],
        answer: 0
    },
    {
        question: "Who is the current Prime Minister of India?",
        options: ["Narendra Modi", "SubraKanti", "amit shah", "rahul gandhi"],
        answer: 0
    },
    {
        question: "Who is the current President of India?",
        options: ["Narendra Modi", "Draupadi Murmu", "Amit Shah", "Nitish Kumar"],
        answer: 1
    }
    ,
    {
        question: "When was India’s Independence Day?",
        options: ["11th August", "11th Nov", "15th August", "11th July"],
        answer: 2
    }
    ,
    {
        question: "What is the national language of India?",
        options: ["English", "Hindi", "French", "Bengali"],
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