// Quiz Application Logic

class QuizApp {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.shuffledQuestions = [];
        this.quizInProgress = false;

        // DOM Elements
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        this.startBtn = document.getElementById('startBtn');
        this.retakeBtn = document.getElementById('retakeBtn');
        this.optionBtns = document.querySelectorAll('.option-btn');
        this.quoteText = document.getElementById('quoteText');
        this.questionNumber = document.getElementById('questionNumber');
        this.progressFill = document.getElementById('progressFill');

        // Event Listeners
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.retakeBtn.addEventListener('click', () => this.startQuiz());
        this.optionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectAnswer(e.currentTarget));
        });
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.shuffledQuestions = shuffleArray(quizData);
        this.quizInProgress = true;

        this.hideAllScreens();
        this.showScreen(this.quizScreen);
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestion >= this.shuffledQuestions.length) {
            this.endQuiz();
            return;
        }

        const question = this.shuffledQuestions[this.currentQuestion];
        this.quoteText.textContent = `"${question.quote}"`;
        this.questionNumber.textContent = this.currentQuestion + 1;

        // Update progress bar
        const progress = ((this.currentQuestion) / this.shuffledQuestions.length) * 100;
        this.progressFill.style.width = progress + '%';

        // Reset button states
        this.optionBtns.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.disabled = false;
        });
    }

    selectAnswer(button) {
        if (!this.quizInProgress) return;

        const selectedAnswer = button.getAttribute('data-answer');
        const correctAnswer = this.shuffledQuestions[this.currentQuestion].speaker;
        const isCorrect = selectedAnswer === correctAnswer;

        // Store answer
        this.answers.push({
            question: this.shuffledQuestions[this.currentQuestion].quote,
            userAnswer: selectedAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        });

        // Update score
        if (isCorrect) {
            this.score++;
        }

        // Mark buttons
        this.optionBtns.forEach(btn => {
            btn.disabled = true;
            const btnAnswer = btn.getAttribute('data-answer');

            if (btnAnswer === correctAnswer) {
                btn.classList.add('correct');
            } else if (btnAnswer === selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        button.classList.add('selected');

        // Move to next question after delay
        setTimeout(() => {
            this.currentQuestion++;
            this.loadQuestion();
        }, 1500);
    }

    endQuiz() {
        this.quizInProgress = false;
        this.hideAllScreens();
        this.showScreen(this.resultsScreen);
        this.displayResults();
    }

    displayResults() {
        const finalScore = document.getElementById('finalScore');
        const resultMessage = document.getElementById('resultMessage');
        const correctCount = document.getElementById('correctCount');
        const incorrectCount = document.getElementById('incorrectCount');
        const accuracy = document.getElementById('accuracy');

        const incorrect = this.shuffledQuestions.length - this.score;
        const accuracyPercent = Math.round((this.score / this.shuffledQuestions.length) * 100);

        finalScore.textContent = this.score;
        correctCount.textContent = this.score;
        incorrectCount.textContent = incorrect;
        accuracy.textContent = accuracyPercent + '%';

        // Determine result message based on score
        if (this.score === this.shuffledQuestions.length) {
            resultMessage.textContent = "Perfect! You're a political quote expert!";
        } else if (this.score >= 8) {
            resultMessage.textContent = "Excellent! You know your quotes well!";
        } else if (this.score >= 6) {
            resultMessage.textContent = "Good job! You got most of them right!";
        } else if (this.score >= 4) {
            resultMessage.textContent = "Not bad! You know some of their quotes!";
        } else {
            resultMessage.textContent = "Better luck next time! Try again?";
        }
    }

    hideAllScreens() {
        this.startScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');
    }

    showScreen(screen) {
        screen.classList.add('active');
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
