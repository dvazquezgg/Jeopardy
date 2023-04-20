let currentQuestion;
let currentAnswer;

function showQuestion(categoryIndex, questionIndex) {
    // Get the question and answer based on category and question index
    // You can modify this part to get your own questions and answers
    currentQuestion = "This European capital is known for its canals and gondolas.";
    currentAnswer = "What is Venice?";

    // Update the question modal with the current question
    document.getElementById('questionText').textContent = currentQuestion;
    document.getElementById('answerInput').value = '';

    // Show the question modal
    document.getElementById('questionModal').style.display = 'block';
}

function checkAnswer() {
    // Get the user's answer
    let userAnswer = document.getElementById('answerInput').value;

    // Convert the user's answer and the current answer to lowercase for case-insensitive comparison
    userAnswer = userAnswer.toLowerCase();
    currentAnswer = currentAnswer.toLowerCase();

    // Check if the user's answer is correct
    if (userAnswer === currentAnswer) {
        // Update the question modal with correct answer message
        document.getElementById('questionText').textContent = 'Correct!';
        document.getElementById('answerInput').disabled = true;
        document.getElementById('answerInput').placeholder = '';
        document.getElementById('answerInput').style.display = 'none';
        document.getElementById('answerInput').value = '';
    } else {
        // Update the question modal with incorrect answer message
        document.getElementById('questionText').textContent = 'Incorrect. The correct answer is: ' + currentAnswer;
    }
}

function closeQuestionModal() {
    // Hide the question modal
    document.getElementById('questionModal').style.display = 'none';
}