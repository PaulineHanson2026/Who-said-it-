// Quiz state
let currentQuestion = 0;
let score = 0;
let answeredQuestions = 0;
let shuffledQuiz = [];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const retakeBtn = document.getElementById('retakeBtn');
const quoteText = document.getElementById('quoteText');
const optionButtons = document.querySelectorAll('.option-btn');
const questionNumber = document.getElementById('questionNumber');
const progressFill = document.getElementById('progressFill');
const finalScore = document.getElementById('finalScore');
const correctCount = document.getElementById('correctCount');
const accuracy = document.getElementById('accuracy');
const resultMessage = document.getElementById('resultMessage');

// Initialize event listeners
startBtn.addEventListener('click', startQuiz);
retakeBtn.addEventListener('click', retakeQuiz);
optionButtons.forEach(btn => {
    btn.addEventListener('click', handleAnswer);
});

// Start the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions = 0;
    shuffledQuiz = shuffleArray(quizData);
    
    showScreen('quiz');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    if (currentQuestion >= shuffledQuiz.length) {
        showResults();
        return;
    }
    
    const question = shuffledQuiz[currentQuestion];
    quoteText.textContent = question.quote;
    
    // Update progress
    questionNumber.textContent = currentQuestion + 1;
    progressFill.style.width = ((currentQuestion + 1) / shuffledQuiz.length) * 100 + '%';
    
    // Reset button states
    optionButtons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
    });
}

// Handle answer selection
function handleAnswer(e) {
    const selectedBtn = e.target.closest('.option-btn');
    const selectedAnswer = selectedBtn.dataset.answer;
    const correctAnswer = shuffledQuiz[currentQuestion].speaker;
    
    // Disable all buttons
    optionButtons.forEach(btn => btn.disabled = true);
    
    // Show selected answer
    selectedBtn.classList.add('selected');
    
    // Check if correct
    if (selectedAnswer === correctAnswer) {
        score++;
        selectedBtn.classList.remove('selected');
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.remove('selected');
        selectedBtn.classList.add('incorrect');
        
        // Show correct answer
        optionButtons.forEach(btn => {
            if (btn.dataset.answer === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    answeredQuestions++;
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 1500);
}

// Show results screen
function showResults() {
    showScreen('results');
    
    const percentage = Math.round((score / shuffledQuiz.length) * 100);
    
    finalScore.textContent = score;
    correctCount.textContent = score;
    accuracy.textContent = percentage + '%';
    
    // Custom result message
    if (percentage === 100) {
        resultMessage.textContent = "Perfect score! You know their controversial statements well!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Excellent! You're very familiar with their quotes.";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good! You got most of them right.";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! You got about half right.";
    } else {
        resultMessage.textContent = "Better luck next time!";
    }
}

// Retake the quiz
function retakeQuiz() {
    startQuiz();
}

// Show/hide screens
function showScreen(screenName) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    if (screenName === 'start') startScreen.classList.add('active');
    if (screenName === 'quiz') quizScreen.classList.add('active');
    if (screenName === 'results') resultsScreen.classList.add('active');
}