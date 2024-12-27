// document.getElementById('start-game').addEventListener('click', () => {
//     const level = document.getElementById('level').value;
//     if (level) {
//         localStorage.setItem('selectedLevel', level);
//         alert(`You selected: ${level}. Redirecting to the game...`);
//         // Redirect to the game page
//         window.location.href = 'game.html';
//     } else {
//         alert('Please select a level to start the game.');
//     }
// });
document.getElementById('start-game').addEventListener('click', () => {
    const selectedLevel = document.getElementById('level').value;
    // Save the selected level to localStorage
    localStorage.setItem('selectedLevel', selectedLevel);
    // Redirect to chatbot page
    window.location.href = 'chatbot.html';
});
