const button = document.querySelectorAll(`.button`);


async function buttonClick(event){
    event.preventDefault();

    console.log(`button Clicked ${event.target.value}`)
};

button.forEach(buttons => {
    buttons.addEventListener('click', buttonClick)
})
