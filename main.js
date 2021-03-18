let btnStart = document.querySelector('#start')
let gameField = document.querySelector('#game')
let timer = document.querySelector('#time')
let result = document.querySelector('#result')
let score = 0;
let isGameStarted = false

let timeHeader = document.querySelector('#time-header')
let resultHeader = document.querySelector('#result-header')

btnStart.addEventListener('click', pressedBtn)
gameField.addEventListener('click', handleBoxClick)


function pressedBtn(){
    score = 0
    timeHeader.classList.remove('hide')
    resultHeader.classList.add('hide')
    isGameStarted = true
    btnStart.classList.add('hide');
    gameField.style.backgroundColor = 'transparent';
    gameTime()

    let leftTime = setInterval(function (){
        let time = parseFloat(timer.textContent)

        if(time <= 0){
            clearInterval(leftTime)
            gameIsOver()
        }
        else{
            timer.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)
    boxGenerator()
}

function gameIsOver(){
    isGameStarted = false
    gameScore()
    btnStart.classList.remove('hide')
    gameField.style.backgroundColor = '#ccc'
    gameField.innerHTML = ''
    timeHeader.classList.add('hide')
    resultHeader.classList.remove('hide')
    if(score >= 10){
        alert('Слава Україні')
    }

}
function gameTime(){
    time.textContent = document.querySelector('#game-time').value
}
function gameScore(){
    result.textContent = score.toString()
}

function handleBoxClick(event){
    if(isGameStarted){
        if(event.target.dataset.box){
            score++
            boxGenerator()
        }
    }
    else{
        return
    }
    

}

function boxGenerator(){
    gameField.innerHTML = ''

    let box = document.createElement('div')
    let boxSize = randomizer(30, 100)
    let gameSize = gameField.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.background = '#000'
    box.style.top = randomizer(0, maxTop) + 'px'
    box.style.left = randomizer(0, maxLeft) + 'px'
    box.style.pointer = 'cursor'
    box.setAttribute('data-box', 'true')

    gameField.insertAdjacentElement('afterbegin', box)
}

function randomizer(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


