let counter = 0;
let text_prompts = [
    "Click the yes below!",
    "Oops! Looks like you may have clicked the wrong button... no worries though - (click the 'Yes' to be my valentine)",
    "Pretty please?",
    "Stop",
    "Stop trying",
    "Stop trying to",
    "Stop trying to click",
    "Stop trying to click the",
    "Stop trying to click the 'No'",
    "Stop trying to click the 'No' button",
    "Stop trying to click the 'No' button and",
    "Stop trying to click the 'No' button and click",
    "Stop trying to click the 'No' button and click the",
    "Stop trying to click the 'No' button and click the 'Yes' button",
    "Okay clearly I need a change in strategy... go ahead, click the 'No' button - see if I care.",
    "Aha! You have fallen for my trap.",
    "Oh no, what's happening to the yes button :O - I swear its not me!",
    "Alright...",
    "I feel like its really quite hard to miss the big green button at this point",
    "Surely you see a big green button and think oooooo let me click that",
    "I mean, I would",
    "...",
    "While we are here, random question: ",
    "What are you doing on the 14th of February?",
    "No way! I'm free too!",
    "Click the green button then we both won't be free",
    "hmmmmm, maybe sign language will work on you",
    "👍🏻👌🏼👏🏻🤞🏼🙌🏻👋🏻🤙🏻👊🏻👆🏻🤟🏻👇🏻✋🏻👉🏻🤜🏻🤛🏻🤏🏻",
    "Wow, I really thought that one would get you.",
    "Well I did try my best",
    "Guess we will just be stuck here forever...",
    "With only one way to escape - I wonder what it could be?",
]

let scaleFactor = 2;

document.getElementById('no-btn').addEventListener('click', () => {
    counter = (counter + 1) % text_prompts.length;
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const text = document.getElementById('text');
    text.innerHTML = text_prompts[counter];


    if (counter === 0){
        yesButton.style.fontSize = '1.2rem';
        scaleFactor = 2;
    }

    if (counter > 2 && counter < 13){
        noButton.style.position = 'absolute';
        noButton.style.top = `${Math.random() * 80}%`;
        noButton.style.left = `${Math.random() * 80}%`;
    }

    if (counter === 14){
        noButton.style.position = 'relative';
        noButton.style.top = '0';
        noButton.style.left = '0';
        noButton.style.display = 'flex';

    }

    if (counter > 14){
        scaleFactor += 0.75;
        yesButton.style.fontSize = `${scaleFactor}em`;
    }

    
});

// Someone fix this -- im lazy
document.getElementById('yes-btn').addEventListener('click', () => {
    // Make everythin else invisible and display the victory GIF
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const text = document.getElementById('text');
    const nogif = document.getElementById('no-gif');
    const yesgif = document.getElementById('yes-gif');
    const textContainer = document.getElementById('temp');

    textContainer.innerHTML = "WOOOOOOOHOOOOOOOOO!!! I mean... nice 😎";
    nogif.style.display = 'none';
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    text.style.display = 'none';
    yesgif.style.display = 'block';
});
