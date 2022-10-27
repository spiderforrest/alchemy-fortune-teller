// grab DOM elements
const buttonSubmit = document.getElementById('submit-button');
const buttonReset = document.getElementById('reset-button');
const promptSection = document.getElementById('prompt-section');
const answerSection = document.getElementById('answer-section');
const answer = document.getElementById('answer');

// define answers
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

// function to flip visiblity
function toggleSections() {
    promptSection.classList.toggle('hide');
    answerSection.classList.toggle('hide');
}

buttonSubmit.addEventListener('click', () => {
    console.log('hi');
    toggleSections();
    const i = Math.floor(Math.random() * answers.length);
    answer.textContent = answers[i];
});

buttonReset.addEventListener('click', () => toggleSections());
