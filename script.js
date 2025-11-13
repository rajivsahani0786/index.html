Purpose: 
The brain of the Duolingo-style learning system. Controls:
- Question flow
- Answer checking
- XP and streak system
- Wrong-answer retry queue
- Progress saving using localStorage
- Course completion and SpendSmart unlock

Core Functions:
- showQuestion(): Renders current question
- checkAnswer() / checkMCQ(): Validates user input
- giveFeedback(): Shows empathetic messages
- awardXP(): Adds points with animation
- nextQuestion(): Randomly retries wrong Qs
- saveProgress() / loadProgress(): Persists user data
- finishCourse(): Unlocks SpendSmart app
