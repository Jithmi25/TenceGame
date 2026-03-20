// Initialize variables
let remainingQuestions = 50;
let timer;
let timeLeft = 30;

// Simulated AI question generator
const generateQuestion = (category) => {
    const questions = {
        beginner: [
                { "sentence": "She ___ (walk) to school every day.", "answer": "walks", "hint": "Use the present simple tense for singular subjects." },
                { "sentence": "I ___ (read) a book now.", "answer": "am reading", "hint": "Present continuous tense." },
                { "sentence": "They ___ (play) football yesterday.", "answer": "played", "hint": "Past simple tense." },
                { "sentence": "He ___ (eat) his lunch at the moment.", "answer": "is eating", "hint": "Present continuous tense." },
                { "sentence": "We ___ (go) to the park every weekend.", "answer": "go", "hint": "Present simple tense for habitual actions." },
                { "sentence": "I ___ (be) very happy today.", "answer": "am", "hint": "Present simple tense for state of being." },
                { "sentence": "She ___ (not/like) coffee.", "answer": "does not like", "hint": "Present simple negative form." },
                { "sentence": "He ___ (watch) TV when I arrived.", "answer": "was watching", "hint": "Past continuous tense." },
                { "sentence": "They ___ (study) English for two years.", "answer": "have been studying", "hint": "Present perfect continuous tense." },
                { "sentence": "The train ___ (leave) at 6 PM.", "answer": "leaves", "hint": "Use present simple for schedules." },
                { "sentence": "I ___ (not/see) that movie yet.", "answer": "have not seen", "hint": "Present perfect tense for unfinished time." },
                { "sentence": "She ___ (write) a letter when I called.", "answer": "was writing", "hint": "Past continuous tense." },
                { "sentence": "We ___ (visit) Paris last summer.", "answer": "visited", "hint": "Past simple tense for completed actions." },
                { "sentence": "He ___ (not/go) to the party yesterday.", "answer": "did not go", "hint": "Past simple negative form." },
                { "sentence": "They ___ (be) friends for a long time.", "answer": "have been", "hint": "Present perfect tense for duration." },
                { "sentence": "She ___ (cook) dinner every evening.", "answer": "cooks", "hint": "Present simple tense for routine actions." },
                { "sentence": "I ___ (read) this book twice before.", "answer": "have read", "hint": "Present perfect tense." },
                { "sentence": "They ___ (arrive) just now.", "answer": "have arrived", "hint": "Present perfect tense for recent actions." },
                { "sentence": "He ___ (be) a teacher five years ago.", "answer": "was", "hint": "Past simple tense for past states." },
                { "sentence": "The sun ___ (rise) in the east.", "answer": "rises", "hint": "Present simple tense for universal truths." },
                { "sentence": "I ___ (not/finish) my homework yet.", "answer": "have not finished", "hint": "Present perfect tense for incomplete actions." },
                { "sentence": "She ___ (speak) French fluently.", "answer": "speaks", "hint": "Present simple tense for general abilities." },
                { "sentence": "They ___ (play) chess when it started raining.", "answer": "were playing", "hint": "Past continuous tense." },
                { "sentence": "We ___ (travel) to London next week.", "answer": "are traveling", "hint": "Present continuous tense for future plans." },
                { "sentence": "I ___ (not/know) the answer.", "answer": "do not know", "hint": "Present simple negative form." },
                { "sentence": "He ___ (clean) his room right now.", "answer": "is cleaning", "hint": "Present continuous tense." },
                { "sentence": "They ___ (finish) the project before the deadline.", "answer": "had finished", "hint": "Past perfect tense." },
                { "sentence": "The cat ___ (sleep) on the sofa.", "answer": "is sleeping", "hint": "Present continuous tense." },
                { "sentence": "We ___ (be) at the park yesterday.", "answer": "were", "hint": "Past simple tense for locations." },
                { "sentence": "She ___ (not/drink) tea in the morning.", "answer": "does not drink", "hint": "Present simple negative form." },
                { "sentence": "The children ___ (play) outside when it started raining.", "answer": "were playing", "hint": "Past continuous tense." },
                { "sentence": "I ___ (lose) my keys yesterday.", "answer": "lost", "hint": "Past simple tense for completed actions." },
                { "sentence": "He ___ (not/come) to the meeting.", "answer": "did not come", "hint": "Past simple negative form." },
                { "sentence": "The dog ___ (bark) loudly every night.", "answer": "barks", "hint": "Present simple tense for habitual actions." },
                { "sentence": "We ___ (leave) the house at 7 PM.", "answer": "left", "hint": "Past simple tense for completed actions." },
                { "sentence": "She ___ (study) for the exam last night.", "answer": "was studying", "hint": "Past continuous tense." },
                { "sentence": "They ___ (see) the movie already.", "answer": "have seen", "hint": "Present perfect tense for past experiences." },
                { "sentence": "I ___ (not/go) to the gym yesterday.", "answer": "did not go", "hint": "Past simple negative form." },
                { "sentence": "He ___ (travel) to Japan twice.", "answer": "has traveled", "hint": "Present perfect tense for repeated actions." },
                { "sentence": "We ___ (live) here since 2010.", "answer": "have lived", "hint": "Present perfect tense for duration." },
                { "sentence": "The baby ___ (cry) all night.", "answer": "cried", "hint": "Past simple tense for completed actions." },
                { "sentence": "I ___ (not/eat) breakfast yet.", "answer": "have not eaten", "hint": "Present perfect tense for unfinished actions." },
                { "sentence": "She ___ (write) emails every morning.", "answer": "writes", "hint": "Present simple tense for routines." },
                { "sentence": "They ___ (watch) TV when I arrived.", "answer": "were watching", "hint": "Past continuous tense." },
                { "sentence": "We ___ (not/see) the new movie yet.", "answer": "have not seen", "hint": "Present perfect negative form." },
                { "sentence": "I ___ (ride) my bike every weekend.", "answer": "ride", "hint": "Present simple tense for habitual actions." },
                { "sentence": "He ___ (work) on the project right now.", "answer": "is working", "hint": "Present continuous tense." },
                { "sentence": "They ___ (arrive) early yesterday.", "answer": "arrived", "hint": "Past simple tense for completed actions." },
                { "sentence": "She ___ (not/know) the answer to the question.", "answer": "does not know", "hint": "Present simple negative form." }
              ],
        intermediate: 
        [
            { "sentence": "They ___ (complete) the task before the deadline.", "answer": "had completed", "hint": "Past perfect tense." },
            { "sentence": "He ___ (try) to solve the problem for two hours.", "answer": "has been trying", "hint": "Present perfect continuous tense." },
            { "sentence": "She ___ (write) the report when I called her.", "answer": "was writing", "hint": "Past continuous tense." },
            { "sentence": "I ___ (never/see) a movie like that before.", "answer": "have never seen", "hint": "Present perfect tense for past experiences." },
            { "sentence": "By the time we arrive, they ___ (finish) the meeting.", "answer": "will have finished", "hint": "Future perfect tense." },
            { "sentence": "He ___ (be) in the library for three hours when I saw him.", "answer": "had been", "hint": "Past perfect continuous tense." },
            { "sentence": "We ___ (live) here since 2015.", "answer": "have lived", "hint": "Present perfect tense for duration." },
            { "sentence": "I ___ (wait) for you for over an hour.", "answer": "have been waiting", "hint": "Present perfect continuous tense." },
            { "sentence": "They ___ (not/finish) their homework when the bell rang.", "answer": "had not finished", "hint": "Past perfect negative form." },
            { "sentence": "She ___ (already/leave) when I got there.", "answer": "had already left", "hint": "Past perfect tense." },
            { "sentence": "They ___ (work) on the project for a month before they completed it.", "answer": "had been working", "hint": "Past perfect continuous tense." },
            { "sentence": "I ___ (not/see) him for two years.", "answer": "have not seen", "hint": "Present perfect tense." },
            { "sentence": "By this time next year, I ___ (graduate) from university.", "answer": "will have graduated", "hint": "Future perfect tense." },
            { "sentence": "We ___ (not/finish) the meal when the guests arrived.", "answer": "had not finished", "hint": "Past perfect negative form." },
            { "sentence": "By the time we finish, they ___ (start) their meeting.", "answer": "will have started", "hint": "Future perfect tense." },
            { "sentence": "The children ___ (play) outside when it started raining.", "answer": "were playing", "hint": "Past continuous tense." },
            { "sentence": "I ___ (see) that movie several times.", "answer": "have seen", "hint": "Present perfect tense for repeated actions." },
            { "sentence": "She ___ (work) at this company for five years.", "answer": "has worked", "hint": "Present perfect tense." },
            { "sentence": "He ___ (not/finish) reading the book before the class started.", "answer": "had not finished", "hint": "Past perfect negative form." },
            { "sentence": "We ___ (be) friends since childhood.", "answer": "have been", "hint": "Present perfect tense for duration." },
            { "sentence": "I ___ (read) this book when you called me.", "answer": "was reading", "hint": "Past continuous tense." },
            { "sentence": "They ___ (study) English for two years when they moved to Canada.", "answer": "had been studying", "hint": "Past perfect continuous tense." },
            { "sentence": "By 2025, they ___ (build) the new highway.", "answer": "will have built", "hint": "Future perfect tense." },
            { "sentence": "I ___ (never/understand) why she left.", "answer": "have never understood", "hint": "Present perfect tense." },
            { "sentence": "He ___ (not/finish) the report when the boss arrived.", "answer": "had not finished", "hint": "Past perfect negative form." },
            { "sentence": "By the time you arrive, I ___ (leave).", "answer": "will have left", "hint": "Future perfect tense." },
            { "sentence": "She ___ (cook) dinner when I arrived.", "answer": "was cooking", "hint": "Past continuous tense." },
            { "sentence": "They ___ (live) in that house for ten years when they moved out.", "answer": "had lived", "hint": "Past perfect tense." },
            { "sentence": "I ___ (wait) here for an hour.", "answer": "have been waiting", "hint": "Present perfect continuous tense." },
            { "sentence": "By the time we reach the airport, our flight ___ (leave).", "answer": "will have left", "hint": "Future perfect tense." },
            { "sentence": "She ___ (study) for the exam when I saw her.", "answer": "was studying", "hint": "Past continuous tense." },
            { "sentence": "We ___ (never/visit) that country before.", "answer": "have never visited", "hint": "Present perfect tense." },
            { "sentence": "I ___ (see) him yesterday.", "answer": "saw", "hint": "Past simple tense." },
            { "sentence": "They ___ (be) busy all day.", "answer": "have been", "hint": "Present perfect tense." },
            { "sentence": "I ___ (not/go) to the party last night.", "answer": "did not go", "hint": "Past simple negative form." },
            { "sentence": "They ___ (work) on the project for two months before they finished it.", "answer": "had been working", "hint": "Past perfect continuous tense." },
            { "sentence": "She ___ (live) here since 2010.", "answer": "has lived", "hint": "Present perfect tense." },
            { "sentence": "He ___ (already/finish) his work when I arrived.", "answer": "had already finished", "hint": "Past perfect tense." },
            { "sentence": "I ___ (never/meet) anyone like her.", "answer": "have never met", "hint": "Present perfect tense." },
            { "sentence": "She ___ (take) her medicine every morning.", "answer": "takes", "hint": "Present simple tense for routine actions." },
            { "sentence": "I ___ (not/see) him recently.", "answer": "have not seen", "hint": "Present perfect tense." }
          ],
          
        advanced:
            [
                { "sentence": "If he ___ (study), he would have passed the exam.", "answer": "had studied", "hint": "Third conditional sentence." },
                { "sentence": "The book ___ (write) by an unknown author.", "answer": "was written", "hint": "Passive voice in past tense." },
                { "sentence": "If I ___ (know) about the problem, I would have helped you.", "answer": "had known", "hint": "Third conditional sentence." },
                { "sentence": "The letter ___ (send) by the time you arrive.", "answer": "will have been sent", "hint": "Future perfect passive voice." },
                { "sentence": "She ___ (be) upset if she had known about the news.", "answer": "would have been", "hint": "Third conditional sentence." },
                { "sentence": "The house ___ (build) by the team of engineers next year.", "answer": "will be built", "hint": "Future passive voice." },
                { "sentence": "By the time we arrive, he ___ (finish) the task.", "answer": "will have finished", "hint": "Future perfect tense." },
                { "sentence": "Had they ___ (arrive) earlier, they could have joined the meeting.", "answer": "arrived", "hint": "Third conditional sentence." },
                { "sentence": "The car ___ (repair) by the mechanic when we return.", "answer": "will have been repaired", "hint": "Future perfect passive voice." },
                { "sentence": "If I ___ (be) you, I would have taken that opportunity.", "answer": "had been", "hint": "Third conditional sentence." },
                { "sentence": "The decision ___ (make) after careful consideration.", "answer": "was made", "hint": "Passive voice in past tense." },
                { "sentence": "I ___ (not/do) anything differently if I had known the outcome.", "answer": "would not have done", "hint": "Third conditional sentence." },
                { "sentence": "The project ___ (complete) by next month.", "answer": "will be completed", "hint": "Future passive voice." },
                { "sentence": "She ___ (not/go) to the party if she had known it would rain.", "answer": "would not have gone", "hint": "Third conditional sentence." },
                { "sentence": "By the time they arrived, the meeting ___ (already/start).", "answer": "had already started", "hint": "Past perfect tense." },
                { "sentence": "We ___ (not/finish) the project by the deadline.", "answer": "would not have finished", "hint": "Third conditional sentence." },
                { "sentence": "The project ___ (complete) on time if we had more resources.", "answer": "would have been completed", "hint": "Third conditional sentence." },
                { "sentence": "The presentation ___ (give) by the CEO next week.", "answer": "will be given", "hint": "Future passive voice." },
                { "sentence": "She ___ (not/buy) the dress if she had known it was so expensive.", "answer": "would not have bought", "hint": "Third conditional sentence." },
                { "sentence": "The new software ___ (release) by the end of this year.", "answer": "will be released", "hint": "Future passive voice." },
                { "sentence": "Had he ___ (arrive) earlier, we could have finished the project on time.", "answer": "arrived", "hint": "Third conditional sentence." },
                { "sentence": "The report ___ (be) completed by the end of the week.", "answer": "will be", "hint": "Future passive voice." },
                { "sentence": "We ___ (not/see) the new movie if we had known it was so bad.", "answer": "would not have seen", "hint": "Third conditional sentence." },
                { "sentence": "By next year, they ___ (complete) the new building.", "answer": "will have completed", "hint": "Future perfect tense." },
                { "sentence": "If you ___ (ask) for help, I would have assisted you.", "answer": "had asked", "hint": "Third conditional sentence." },
                { "sentence": "The problem ___ (resolve) by the team of experts.", "answer": "will be resolved", "hint": "Future passive voice." },
                { "sentence": "She ___ (already/leave) by the time I arrived.", "answer": "had already left", "hint": "Past perfect tense." },
                { "sentence": "The project ___ (finish) by the time we arrive.", "answer": "will have finished", "hint": "Future perfect tense." },
                { "sentence": "The house ___ (sell) by the time we return.", "answer": "will have been sold", "hint": "Future perfect passive voice." },
                { "sentence": "They ___ (not/complete) the task before the deadline.", "answer": "would not have completed", "hint": "Third conditional sentence." },
                { "sentence": "The report ___ (finish) by the end of today.", "answer": "will be finished", "hint": "Future passive voice." },
                { "sentence": "She ___ (not/go) to the meeting if she had known it was canceled.", "answer": "would not have gone", "hint": "Third conditional sentence." },
                { "sentence": "If he ___ (work) harder, he would have passed the exam.", "answer": "had worked", "hint": "Third conditional sentence." },
                { "sentence": "The new policy ___ (introduce) next month.", "answer": "will be introduced", "hint": "Future passive voice." },
                { "sentence": "The book ___ (translate) into several languages by the publisher.", "answer": "has been translated", "hint": "Present perfect passive voice." },
                { "sentence": "The problem ___ (solve) before the deadline.", "answer": "will have been solved", "hint": "Future perfect passive voice." }
              ],
    };

    const selected = questions[category][Math.floor(Math.random() * questions[category].length)];
    return selected;
};

let score = 0;
let streak = 0;
let bestStreak = Number(localStorage.getItem("bestStreak") || 0);
let questionsAnswered = 0;
let difficultyMultiplier = 1;
let currentQuestion = null;

const state = {
    selectedCategory: localStorage.getItem("selectedLevel") || "beginner",
    useAi: localStorage.getItem("useAiQuestions") === "true",
    apiBaseUrl: localStorage.getItem("aiApiBaseUrl") || "https://api.openai.com/v1/chat/completions",
    apiModel: localStorage.getItem("aiApiModel") || "gpt-4o-mini",
    apiKey: localStorage.getItem("aiApiKey") || "",
};

const normalizeAnswer = (text) => {
    return text.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
};

const addMessage = (message, type = "bot-message") => {
    const chatWindow = document.getElementById("chat-window");
    const element = document.createElement("div");
    element.className = type;
    element.textContent = message;
    chatWindow.appendChild(element);
    chatWindow.scrollTop = chatWindow.scrollHeight;
};

const addBotMessage = (message, type = "bot-message") => addMessage(message, type);
const addUserMessage = (message) => addMessage(message, "user-message");

const setApiStatus = (message) => {
    const status = document.getElementById("api-status");
    if (status) {
        status.textContent = message;
    }
};

const loadApiSettingsIntoUI = () => {
    const useAi = document.getElementById("use-ai");
    const apiBaseUrl = document.getElementById("api-base-url");
    const apiModel = document.getElementById("api-model");
    const apiKey = document.getElementById("api-key");

    if (!useAi || !apiBaseUrl || !apiModel || !apiKey) {
        return;
    }

    useAi.checked = state.useAi;
    apiBaseUrl.value = state.apiBaseUrl;
    apiModel.value = state.apiModel;
    apiKey.value = state.apiKey;
};

const saveApiSettingsFromUI = () => {
    const useAi = document.getElementById("use-ai");
    const apiBaseUrl = document.getElementById("api-base-url");
    const apiModel = document.getElementById("api-model");
    const apiKey = document.getElementById("api-key");

    if (!useAi || !apiBaseUrl || !apiModel || !apiKey) {
        state.useAi = false;
        localStorage.setItem("useAiQuestions", "false");
        return;
    }

    state.useAi = useAi.checked;
    state.apiBaseUrl = apiBaseUrl.value.trim();
    state.apiModel = apiModel.value.trim();
    state.apiKey = apiKey.value.trim();

    localStorage.setItem("useAiQuestions", String(state.useAi));
    localStorage.setItem("aiApiBaseUrl", state.apiBaseUrl);
    localStorage.setItem("aiApiModel", state.apiModel);
    localStorage.setItem("aiApiKey", state.apiKey);

    if (!state.useAi) {
        setApiStatus("AI mode is off. Using local questions.");
        return;
    }

    if (!state.apiBaseUrl || !state.apiModel || !state.apiKey) {
        setApiStatus("AI mode enabled, but API URL/model/key is incomplete. Falling back to local questions.");
        return;
    }

    setApiStatus("AI mode enabled. New questions will be requested from your API.");
};

const setJsonOutput = (value) => {
    const output = document.getElementById("json-output");
    if (output) {
        output.value = value;
    }
};

const parseAiQuestionPayload = (payload) => {
    const start = payload.indexOf("{");
    const end = payload.lastIndexOf("}");
    if (start < 0 || end <= start) {
        throw new Error("No JSON object returned by AI model");
    }

    const parsed = JSON.parse(payload.slice(start, end + 1));
    if (!parsed.sentence || !parsed.answer || !parsed.hint) {
        throw new Error("Missing sentence/answer/hint in AI response");
    }

    return {
        sentence: String(parsed.sentence),
        answer: String(parsed.answer),
        hint: String(parsed.hint),
    };
};

const fetchAiQuestion = async (category) => {
    if (!state.useAi) {
        return null;
    }

    if (!state.apiBaseUrl || !state.apiModel || !state.apiKey) {
        setApiStatus("AI settings incomplete. Using local question set.");
        return null;
    }

    const systemPrompt = "You generate English tense practice questions for language learners. Return only valid JSON.";
    const userPrompt = `Generate one ${category} tense question with exactly this JSON format: {"sentence":"...", "answer":"...", "hint":"..."}. Use a sentence with one blank represented as ___ and include only one best answer.`;

    const response = await fetch(state.apiBaseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${state.apiKey}`,
        },
        body: JSON.stringify({
            model: state.apiModel,
            temperature: 0.8,
            max_tokens: 180,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
        throw new Error("No AI content returned");
    }

    const question = parseAiQuestionPayload(content);
    setApiStatus("AI question loaded successfully.");
    return question;
};

const generateQuestionJsonBatch = async () => {
    const level = document.getElementById("helper-level").value;
    const requestedCount = Number(document.getElementById("helper-count").value || 1);
    const count = Math.max(1, Math.min(20, requestedCount));

    if (!state.apiBaseUrl || !state.apiModel || !state.apiKey) {
        setApiStatus("Add API URL, model, and key before generating JSON.");
        setJsonOutput("[]");
        return;
    }

    setApiStatus(`Generating ${count} ${level} question(s) with AI...`);
    const generated = [];

    for (let index = 0; index < count; index++) {
        try {
            const question = await fetchAiQuestion(level);
            if (question) {
                generated.push(question);
            }
        } catch (error) {
            setApiStatus(`Generated ${generated.length}/${count}. Last error: ${error.message}`);
        }
    }

    setJsonOutput(JSON.stringify(generated, null, 2));
    localStorage.setItem("generatedQuestionDraft", JSON.stringify(generated));
    setApiStatus(`JSON helper generated ${generated.length}/${count} question(s).`);
};

const copyGeneratedJson = async () => {
    const output = document.getElementById("json-output");
    const text = output ? output.value.trim() : "";

    if (!text) {
        setApiStatus("No generated JSON to copy yet.");
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        setApiStatus("Generated JSON copied to clipboard.");
    } catch (error) {
        setApiStatus("Clipboard permission blocked. Copy the JSON manually from the box.");
    }
};

const updateStatsUI = () => {
    document.getElementById("remaining-count").textContent = remainingQuestions;
    document.getElementById("time-left").textContent = timeLeft;
    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;
    document.getElementById("best-streak").textContent = bestStreak;
    document.getElementById("difficulty").textContent = `${difficultyMultiplier.toFixed(2)}x`;
    document.getElementById("time-left").classList.toggle("low-time", timeLeft <= 7);
};

const calculateTimeForNextQuestion = () => {
    const reducedTime = 30 - Math.floor(questionsAnswered / 4);
    return Math.max(12, reducedTime);
};

const updateDifficulty = () => {
    difficultyMultiplier = 1 + (questionsAnswered * 0.05);
};

const showMilestoneReward = () => {
    if (questionsAnswered > 0 && questionsAnswered % 10 === 0) {
        addBotMessage(`Milestone reached: ${questionsAnswered} questions answered! Keep the streak alive.`, "system-message");
    }
};

const startTimer = () => {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft -= 1;
        updateStatsUI();

        if (timeLeft <= 0) {
            clearInterval(timer);
            streak = 0;
            remainingQuestions--;
            questionsAnswered++;
            updateDifficulty();
            addBotMessage(`Time's up. The correct answer was: ${currentQuestion.answer}`, "feedback-wrong");
            showMilestoneReward();
            updateStatsUI();
            setTimeout(() => loadQuestion(state.selectedCategory), 600);
        }
    }, 1000);
};

const giveHint = (hint) => {
    addBotMessage(`Hint: ${hint}`, "system-message");
};

const submitAnswer = () => {
    if (!currentQuestion) {
        return;
    }

    const input = document.getElementById("user-answer");
    const userAnswer = input.value.trim();
    if (!userAnswer) {
        addBotMessage("Please enter an answer.", "system-message");
        return;
    }

    addUserMessage(userAnswer);
    const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentQuestion.answer);

    if (isCorrect) {
        streak += 1;
        score += Math.round(10 * difficultyMultiplier + Math.max(0, timeLeft));
        bestStreak = Math.max(bestStreak, streak);
        localStorage.setItem("bestStreak", String(bestStreak));
        addBotMessage("Correct! Great work.", "feedback-correct");
    } else {
        streak = 0;
        addBotMessage(`Incorrect. The correct answer is: ${currentQuestion.answer}`, "feedback-wrong");
    }

    clearInterval(timer);
    input.value = "";
    remainingQuestions--;
    questionsAnswered++;
    updateDifficulty();
    showMilestoneReward();
    updateStatsUI();

    setTimeout(() => loadQuestion(state.selectedCategory), 500);
};

const loadQuestion = async (category) => {
    try {
        if (remainingQuestions <= 0) {
            clearInterval(timer);
            addBotMessage(`Session complete! Final score: ${score}. Best streak: ${bestStreak}.`, "system-message");
            return;
        }

        const aiQuestion = await fetchAiQuestion(category).catch((error) => {
            setApiStatus(`AI unavailable (${error.message}). Using local questions.`);
            return null;
        });

        currentQuestion = aiQuestion || generateQuestion(category);
        timeLeft = calculateTimeForNextQuestion();
        updateStatsUI();
        addBotMessage(`Complete the sentence: ${currentQuestion.sentence}`);
        startTimer();
    } catch (error) {
        addBotMessage("An error occurred while fetching the question. Please try again.", "system-message");
    }
};

const restartGame = () => {
    clearInterval(timer);
    remainingQuestions = 50;
    timeLeft = 30;
    score = 0;
    streak = 0;
    questionsAnswered = 0;
    difficultyMultiplier = 1;
    currentQuestion = null;
    document.getElementById("chat-window").innerHTML = "";
    addBotMessage("New run started. Good luck!", "system-message");
    updateStatsUI();
    loadQuestion(state.selectedCategory);
};

const initializeGame = () => {
    const hasPlayed = localStorage.getItem("hasPlayedTenseBot") === "true";
    if (hasPlayed) {
        document.getElementById("onboarding-tip").textContent = "Welcome back! Beat your best streak and keep your timing sharp.";
    } else {
        localStorage.setItem("hasPlayedTenseBot", "true");
    }

    loadApiSettingsIntoUI();
    saveApiSettingsFromUI();
    setJsonOutput(localStorage.getItem("generatedQuestionDraft") || "[]");

    const saveApiSettingsButton = document.getElementById("save-api-settings");
    if (saveApiSettingsButton) {
        saveApiSettingsButton.addEventListener("click", saveApiSettingsFromUI);
    }
    document.getElementById("generate-json-btn").addEventListener("click", () => {
        void generateQuestionJsonBatch();
    });
    document.getElementById("copy-json-btn").addEventListener("click", () => {
        void copyGeneratedJson();
    });
    document.getElementById("submit-btn").addEventListener("click", submitAnswer);
    document.getElementById("hint-btn").addEventListener("click", () => {
        if (currentQuestion) {
            giveHint(currentQuestion.hint);
        }
    });
    document.getElementById("next-btn").addEventListener("click", () => {
        streak = 0;
        clearInterval(timer);
        remainingQuestions--;
        questionsAnswered++;
        updateDifficulty();
        updateStatsUI();
        void loadQuestion(state.selectedCategory);
    });
    document.getElementById("restart-btn").addEventListener("click", restartGame);
    document.getElementById("user-answer").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            submitAnswer();
        }
    });

    updateStatsUI();
    void loadQuestion(state.selectedCategory);
};

window.addEventListener("load", initializeGame);
