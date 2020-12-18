const button = document.querySelectorAll(`.button`);
const topRight = document.querySelector(`#topRight`);
const topLeft = document.querySelector(`#topLeft`);
const botRight = document.querySelector(`#botRight`);
const botLeft = document.querySelector(`#botLeft`);
const botCenter = document.querySelector(`#botCenter`);

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

let computer = [0,1,2,3,4,0,1,2,3,4]

async function computerChoice (){
    let randomNum = Math.floor(Math.random()*5);
    computer.push(randomNum);
    


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
    
    console.log(`the computer array is ${computer}`)
}


async function buttonClick(event){
    event.preventDefault();
    
    computerChoice()
    console.log(`button Clicked ${event.target.value}`)
};

button.forEach(buttons => {
    buttons.addEventListener('click', buttonClick)
})
