const button = document.querySelectorAll(`.button`);
const topRight = document.querySelector(`#topRight`);
const topLeft = document.querySelector(`#topLeft`);
const botRight = document.querySelector(`#botRight`);
const botLeft = document.querySelector(`#botLeft`);
const botCenter = document.querySelector(`#botCenter`);
const currentScore = document.querySelector('#currentScore');
const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', computerChoice);

let addListener  = () =>{
    button.forEach(button => {
        button.addEventListener('click', buttonClick);
    })
}
let removeListener = () =>{
    button.forEach(button => {
        button.removeEventListener(`click`, buttonClick);
    })
}
addListener();


let user = [];
let computer = []


async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function computerChoice (){
    let randomNum = Math.floor(Math.random()*5);
    computer.push(randomNum);
    currentScore.innerText = computer.length;

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

    console.log(`the computer array is ${computer}`)
    startButton.removeEventListener("click", computerChoice)
}

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

    console.log(`button Clicked ${user}`)

    if(user.length == computer.length && computer.length !== 0){
       await compareArray();
        user = [];
        if (computer.length !== 0){
            computerChoice()
        }
    }

    if (user.length >= 1 && computer.length == 0){
        user = []
    }
};

function compareArray(){
    for (let i = 0; i <= computer.length; i++){
        if(user[i] != computer[i]){
            console.log(`you messed up`)
            computer = [];
            startButton.addEventListener('click', computerChoice);
        }
    }
}
