// Quiz state
let currentQuestion = 0;
let score = 0;
let answeredQuestions = 0;
let quizToPlay = [];
let answerRevealed = false;
let userAnswer = null;

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
const revealBtn = document.getElementById('revealBtn');

// Initialize event listeners
startBtn.addEventListener('click', startQuiz);
retakeBtn.addEventListener('click', retakeQuiz);
revealBtn.addEventListener('click', revealAnswer);
optionButtons.forEach(btn => {
    btn.addEventListener('click', selectAnswer);
});

// Start the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions = 0;
    quizToPlay = [...quizData]; // Copy quiz data in exact order
    
    showScreen('quiz');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    answerRevealed = false;
    userAnswer = null;
    revealBtn.style.display = 'none';
    revealBtn.disabled = false;
    revealBtn.textContent = 'Reveal Answer';
    
    if (currentQuestion >= quizToPlay.length) {
        showResults();
        return;
    }
    
    const question = quizToPlay[currentQuestion];
    quoteText.textContent = question.quote;
    
    // Update progress
    questionNumber.textContent = currentQuestion + 1;
    progressFill.style.width = ((currentQuestion + 1) / quizToPlay.length) * 100 + '%';
    
    // Reset button states
    optionButtons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect', 'revealed');
        btn.disabled = false;
    });
}

// Select answer (user clicks Trump or Pauline)
function selectAnswer(e) {
    if (answerRevealed || userAnswer) return;
    
    const selectedBtn = e.target.closest('.option-btn');
    userAnswer = selectedBtn.dataset.answer;
    
    // Highlight selected answer
    selectedBtn.classList.add('selected');
    
    // Disable other buttons
    optionButtons.forEach(btn => {
        if (btn !== selectedBtn) {
            btn.disabled = true;
        }
    });
    
    // Show reveal button
    revealBtn.style.display = 'block';
}

// Reveal the answer
function revealAnswer() {
    if (answerRevealed || !userAnswer) return;
    
    answerRevealed = true;
    const correctAnswer = quizToPlay[currentQuestion].speaker;
    const isCorrect = userAnswer === correctAnswer;
    
    // Disable reveal button
    revealBtn.disabled = true;
    revealBtn.textContent = 'Answer Revealed';
    
    // Show results for all buttons
    optionButtons.forEach(btn => {
        btn.disabled = true;
        
        if (btn.dataset.answer === correctAnswer) {
            // This is the correct answer
            btn.classList.remove('selected');
            btn.classList.add('revealed', 'correct');
            const icon = btn.querySelector('.option-icon');
            if (icon) {
                icon.innerHTML = '✓';
                icon.style.display = 'inline';
            }
        } else if (btn.dataset.answer === userAnswer && !isCorrect) {
            // User's wrong answer - only highlight if they got it wrong
            btn.classList.remove('selected');
            btn.classList.add('revealed', 'incorrect');
            const icon = btn.querySelector('.option-icon');
            if (icon) {
                icon.innerHTML = '✕';
                icon.style.display = 'inline';
            }
        }
    });
    
    // Update score if user was correct
    if (isCorrect) {
        score++;
    }
    
    answeredQuestions++;
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 2500);
}

// Show results screen
function showResults() {
    showScreen('results');
    
    const percentage = Math.round((score / quizToPlay.length) * 100);
    
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