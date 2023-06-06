// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
    },
    // Add more questions here...
];

const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('questions');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

// Function to display the quiz questions
function displayQuiz() {
    quizData.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
                    <h3>Question ${index + 1}:</h3>
                    <p>${question.question}</p>
                    <div class="options">
                        ${question.options
            .map(
                option => `
                            <label>
                                <input type="radio" name="question${index}" value="${option}">
                                ${option}
                            </label>
                        `
            )
            .join('')}
                    </div>
                `;
        questionContainer.appendChild(questionDiv);
    });
}

// Function to calculate the score
function calculateScore() {
    let score = 0;
    quizData.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });
    return score;
}

// Function to show the result
function showResult() {
    const score = calculateScore();
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}!`;
}

// Event listener for submit button click
submitButton.addEventListener('click', showResult);

// Display the quiz on page load
displayQuiz();
