# Tense Bot 🤖

Tense Bot is a browser-based English tense practice game.

Users choose a level (`beginner`, `intermediate`, or `advanced`) and answer fill-in-the-blank grammar questions in a timed chat-style interface. The app tracks score, streaks, best streak, time pressure, and milestone rewards.

## Features 🛠️

- Level selection from the home page
- Chat-style quiz experience with:
  - 50-question session
  - Per-question timer (starts at 30s and decreases over time)
  - Score + streak + best streak tracking
  - Hint support
  - Skip/next and restart controls
- Local built-in question banks for all levels
- Optional AI-powered question generation via configurable API settings
- JSON Question Helper to generate and copy batches of AI questions
- Progress persistence using `localStorage` (selected level, best streak, onboarding state, API settings, generated draft)

## Project Structure 📝

- `index.html` — landing page and level selection
- `style.css` — styles for landing page
- `script.js` — saves selected level and navigates to chat
- `chatbot.html` — quiz/chat UI + AI settings panel
- `chatbot.css` — styles for quiz page
- `chatbot.js` — game logic, timer, scoring, AI integration, JSON helper
- `img.jpg` — landing page banner image

## How to Run 👩🏻‍💻

No build step or dependencies are required.

### Option 1: Open directly

1. Open `index.html` in your browser.
2. Choose a level and click **Start Game**.

### Option 2: Serve locally (recommended)

Use any static server from the project folder.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/index.html`


## Gameplay Notes 🗒️

- Correct answers increase score based on difficulty and remaining time.
- Difficulty multiplier increases as more questions are answered.
- Every 10 answered questions shows a milestone message.
- Session ends after 50 questions.

## Browser Requirements 💻

Modern browser with support for:

- `fetch`
- `localStorage`
- `async/await`
- Clipboard API (for JSON copy button)

