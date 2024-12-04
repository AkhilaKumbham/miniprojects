// Get elements
const unhappy = document.getElementById('unhappy');
const neutral = document.getElementById('neutral');
const satisfied = document.getElementById('satisfied');
const sendReviewButton = document.getElementById('sendReviewButton');
const selectedFeedbackText = document.getElementById('selectedFeedback');
const feedbackModal = document.getElementById('feedbackModal');
const modalFeedbackMessage = document.getElementById('modalFeedbackMessage');
const closeModal = document.getElementsByClassName('close')[0];

// Array of rating elements
const ratings = [unhappy, neutral, satisfied];

// Function to remove selected class from all ratings
function removeSelectedClasses() {
    ratings.forEach(rating => {
        rating.classList.remove('selected-unhappy', 'selected-neutral', 'selected-satisfied');
    });
}

// Add event listeners to ratings
unhappy.addEventListener('click', () => {
    removeSelectedClasses();
    unhappy.classList.add('selected-unhappy');
});

neutral.addEventListener('click', () => {
    removeSelectedClasses();
    neutral.classList.add('selected-neutral');
});

satisfied.addEventListener('click', () => {
    removeSelectedClasses();
    satisfied.classList.add('selected-satisfied');
});

// Function to return emoji for selected rating
function getEmojiForFeedback(feedback) {
    switch (feedback) {
        case 'unhappy':
            return '😞';
        case 'neutral':
            return '😐';
        case 'satisfied':
            return '😊';
        default:
            return '';
    }
}

// Handle "Send Review" button click
sendReviewButton.addEventListener('click', () => {
    let feedbackText = '';
    let emoji = '';

    if (unhappy.classList.contains('selected-unhappy')) {
        feedbackText = "You are unhappy with our service.";
        emoji = getEmojiForFeedback('unhappy');
    } else if (neutral.classList.contains('selected-neutral')) {
        feedbackText = "You are neutral about our service.";
        emoji = getEmojiForFeedback('neutral');
    } else if (satisfied.classList.contains('selected-satisfied')) {
        feedbackText = "You are satisfied with our service.";
        emoji = getEmojiForFeedback('satisfied');
    } else {
        feedbackText = "No feedback selected yet.";
        emoji = '';
    }

    // Update feedback section (No emoji shown here)
    selectedFeedbackText.innerHTML = feedbackText;

    // Open modal and show feedback message with emoji
    modalFeedbackMessage.innerHTML = `${feedbackText} ${emoji}`;
    feedbackModal.style.display = "block";
});

// Close the modal when the user clicks the "x"
closeModal.onclick = function() {
    feedbackModal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == feedbackModal) {
        feedbackModal.style.display = "none";
    }
}

// Store selected feedback in localStorage
ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        let feedback = '';

        if (rating === unhappy) {
            feedback = 'unhappy';
        } else if (rating === neutral) {
            feedback = 'neutral';
        } else if (rating === satisfied) {
            feedback = 'satisfied';
        }

        localStorage.setItem('selectedRating', feedback);
    });
});
