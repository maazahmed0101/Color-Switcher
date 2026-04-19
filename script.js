let randomBtn = document.querySelector('.randomBTN')
let applyBtn = document.querySelector('.applyBTN')
let colorInput = document.querySelector('#colorInput')
let currentColorValue = document.querySelector('.currentColorValue')
let body = document.querySelector('body')
// let vh = window.innerHeight
// document.documentElement.style.setProperty(" --Fixed-vh", `${vh}px`)
// const colorArray = 
const colorArray = ['red', 'green', 'blue', 'orange', 'Green','LightGreen','DarkGreen','Lime','Olive','Teal','aqua', 'tomato', 'aqua', 'black', 'lightseagreen', 'skyBlue', 'DarkRed',   'Coral', 'Blue', 'SkyBlue', 'DarkBlue', 'Navy', 'Aqua', 'Cyan', 'Turquoise']
// console.log(colorArray[2]);

const generateRandomNumber = () => {
    generateNumber = Math.floor(Math.random() * colorArray.length);
    // console.log(generateNumber);
    return (colorArray[generateNumber]);

}



const containerChangingColor = (color) => {
    if (color === '') return
    body.style.backgroundColor = color
    currentColorValue.innerHTML = color
}

const randomBTN = () => {
    // console.log('random button click hua he');  
    // generateRandomNumber()
    containerChangingColor(generateRandomNumber())
}

const appltBTN = () => {
    containerChangingColor(colorInput.value);

}


randomBtn.addEventListener('click', randomBTN)

applyBtn.addEventListener('click', appltBTN)

containerChangingColor('orange')

