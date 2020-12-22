// all declared selectors 
const button = document.querySelectorAll(`.button`);
const topRight = document.querySelector(`#topRight`);
const topLeft = document.querySelector(`#topLeft`);
const botRight = document.querySelector(`#botRight`);
const botLeft = document.querySelector(`#botLeft`);
const botCenter = document.querySelector(`#botCenter`);
const currentScore = document.querySelector('#currentScore');
const startButton = document.querySelector('#startButton');
const loseScreen = document.querySelector("#loseScreen");
const closeButton = document.querySelector('#closeButton');
const finalScore = document.querySelector('#finalScore');
const highScore = document.querySelector('#highScore');
const turn=document.querySelector(`#turn`);

// closing screen button function
// adds start button functionality again
let closeScreen = () => {
    loseScreen.style.zIndex = "-1";
    loseScreen.style.opacity = "0"
    startButton.addEventListener('click', computerChoice);
};
// gives start button a pointer on mouseover
let startClose = () => {
    startButton.style.cursor = "pointer";
}

// adds the base event listeners
closeButton.addEventListener('click', closeScreen);
startButton.addEventListener('click', computerChoice);
startButton.addEventListener(`mouseover`, startClose);

// adds the pointer to the game buttons
let curseOver = () => {
   button.forEach(button => {
        button.style.cursor = "pointer";
   })
}

//adds event listeners to both the game buttons and mouseover
let addListener  = () =>{
    button.forEach(button => {
        button.addEventListener('click', buttonClick);
        button.addEventListener(`mouseover`, curseOver);
    })
};

// function to remove the event listeners of the game
let removeListener = () =>{
    button.forEach(button => {
        button.removeEventListener(`click`, buttonClick);
    })
};

//initalizes the buttons clickability
addListener();

// defines the blank arrays needed and startup pattern
let bestScore = [];
let user = [];
let computer = [];
let onStart = [0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4];

// adds the runthough of the startup animations to the begining
// of the code. this prevents the animation bugs
async function startUp(){
    for(let i=0; i< onStart.length; i++){
        removeListener();
        startButton.removeEventListener("click", computerChoice);
        

        if (onStart[i] == 0){
            botCenter.style.animationDuration = ".25s"
            botCenter.style.animationPlayState = "running";
            await sleep(250);
            botCenter.style.animationPlayState = "paused";
            botCenter.style.animationDuration = "1s"
        }
        else if (onStart[i] == 1){
            topLeft.style.animationDuration = ".25s"
            topLeft.style.animationPlayState = "running";
            await sleep(250);
            topLeft.style.animationPlayState = "paused";
            topLeft.style.animationDuration = "1s"
        }
        else if (onStart[i] == 2){

            topRight.style.animationDuration = ".25s"
            topRight.style.animationPlayState = "running";
            await sleep(250);
            topRight.style.animationPlayState = "paused";
            topRight.style.animationDuration = "1s"
        }
        else if (onStart[i] == 3){
            botRight.style.animationDuration = ".25s"
            botRight.style.animationPlayState = "running";
            await sleep(250);
            botRight.style.animationPlayState = "paused";
            botRight.style.animationDuration = "1s"
        }
        else if (onStart[i] == 4){
            botLeft.style.animationDuration = ".25s"
            botLeft.style.animationPlayState = "running";
            await sleep(250);
            botLeft.style.animationPlayState = "paused";
            botLeft.style.animationDuration = "1s"
        }
        addListener();
        startButton.addEventListener('click', computerChoice);
    }
}
startUp();

// sleep function to pause the code so the animations can run
// in order without overlap
async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

// adds the APIS 
async function API (event){
   
    let randPic = Math.ceil(Math.random()*40);
    if (randPic == 13){
        randPic+=1
    }
    const FinalSpace = `https://finalspaceapi.com/api/v0/character/${randPic}`;

    fetch(FinalSpace)
    .then(res => res.json())
    .then((res) => {
        const spaceAPI = document.querySelector(`#finalSpace`);
        spaceAPI.src = res.img_url
    })
    .catch(err => console.log("something is wrong", err))



    let rickPic = Math.ceil(Math.random()*671)
    

    const rickMorty = `https://rickandmortyapi.com/api/character/${rickPic}`;
   
    fetch(rickMorty)
    .then(res2 => res2.json())
    .then((res2)=> {
        const Sanchez = document.querySelector(`#Sanchez`);
        Sanchez.src = res2.image
    });


};

// adds the computers functionality along with
// timing the turns and api pictures 
// the cheat codes ar in here as well
async function computerChoice (){
    let randomNum = Math.floor(Math.random()*5);
    computer.push(randomNum);
    currentScore.innerText = computer.length -1;

    startButton.removeEventListener("click", computerChoice);
    

    API();
    turn.innerText = `Computer please wait`
    

    removeListener();
    for(let i=0; i< computer.length; i++){
        if (computer[i] == 0){
            await sleep(250);
            botCenter.style.animationPlayState = "running";
            await sleep(1000);
            botCenter.style.animationPlayState = "paused";
            await sleep(250);
        }
        else if (computer[i] == 1){
            await sleep(250);
            topLeft.style.animationPlayState = "running";
            await sleep(1000);
            topLeft.style.animationPlayState = "paused";
            await sleep(250);
        }
        else if (computer[i] == 2){
            await sleep(250);
            topRight.style.animationPlayState = "running";
            await sleep(1000);
            topRight.style.animationPlayState = "paused";
            await sleep(250);
        }
        else if (computer[i] == 3){
            await sleep(250);
            botRight.style.animationPlayState = "running";
            await sleep(1000);
            botRight.style.animationPlayState = "paused";
            await sleep(250);
        }
        else if (computer[i] == 4){
            await sleep(250);
            botLeft.style.animationPlayState = "running";
            await sleep(1000);
            botLeft.style.animationPlayState = "paused";
            await sleep(250);
        }
    }
    addListener();
    turn.innerText = `Player`

    // console.log(`the cheat code is ${computer}`)
};

// displays and records user input
// calls the compare function
// controls the user array along with running the game again
async function buttonClick(event){

    let userClick = event.target.value
    user.push(userClick);
   
    removeListener();
    if (userClick == 0){
        botCenter.style.animationPlayState = "running";
        await sleep(1000);
        botCenter.style.animationPlayState = "paused";

    }
    else if (userClick == 1){
        topLeft.style.animationPlayState = "running";
        await sleep(1000);
        topLeft.style.animationPlayState = "paused";
    }
    else if (userClick == 2){
        topRight.style.animationPlayState = "running";
        await sleep(1000);
        topRight.style.animationPlayState = "paused";
    }
    else if (userClick == 3){
        botRight.style.animationPlayState = "running";
        await sleep(1000);
        botRight.style.animationPlayState = "paused";
    }
    else if (userClick== 4){
        botLeft.style.animationPlayState = "running";
        await sleep(1000);
        botLeft.style.animationPlayState = "paused";
    }
    addListener();

    
    if(user.length == computer.length && computer.length !== 0){
        compareArray();
        user = [];
        if (computer.length !== 0){
            computerChoice()
        }
    }

    if (user.length >= 1 && computer.length == 0){
        user = []
    }

};

// compares the user and computer arrays 
// displays the lose screen along with 
// updates the highscore
function compareArray(){
    for (let i = 0; i <= computer.length; i++){

        if(user[i] != computer[i]){
            closeButton.style.cursor = "pointer";
            loseScreen.style.zIndex = "1";
            loseScreen.style.opacity = "1"
            finalScore.innerText = computer.length -1;
            computer = [];
            currentScore.innerText = "0"
        }
    }

    if (computer.length > bestScore.length -1){
        highScore.innerText = computer.length
        bestScore = computer
     }

};
