document.getElementById('start-game').addEventListener('click', () => {
    const selectedLevel = document.querySelector('input[name="level"]:checked').value;
    // Save the selected level to localStorage
    localStorage.setItem('selectedLevel', selectedLevel);
    // Redirect to chatbot page
    window.location.href = 'chatbot.html';
});
