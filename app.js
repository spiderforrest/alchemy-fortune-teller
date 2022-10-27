// grab DOM elements
const button = document.getElementsByClassName('button');
const promptSection = document.getElementById('prompt');
const answerSection = document.getElementById('ball');
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

// i thought this would be elegant but i do not know why it do not work
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        console.log('did the thing');
        toggleSections();
        const j = Math.floor(Math.random() * answers.length);
        answer.textContent = answers[j];
    });
}
