console.log(`consol is working`);

const button = document.querySelectorAll(`.button`);


const buttonClick = function(){
    console.log(`button Clicked`)
};

button.forEach(buttons => {
    buttons.addEventListener('click', buttonClick)
})
