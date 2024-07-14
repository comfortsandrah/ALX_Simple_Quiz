// Create a JavaScript function named checkAnswer for a quiz application that checks if the user’s selected answer is correct and displays appropriate feedback. You will also add an event listener to the “Submit Answer” button to invoke this function when clicked.
function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    }
    else {
        feedback.textContent = "That's incorrect. Try again!";
    }
    // Add an Event Listener to the Submit Button:
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);
}

