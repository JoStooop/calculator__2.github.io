import {BTN_OPERATION, UI_ELEMENTS} from './view.js'

let numberOne = null
let numberTwo = null
let operation = null

function checkFontSize() {
    const screen = UI_ELEMENTS['CALC_BOTTOM_RESULT']
    const lengthCheckOne = screen.textContent.length >= 6
    const lengthCheckTwo = screen.textContent.length >= 8

    if (lengthCheckOne) {
        screen.style.fontSize = "70px"
    }
    if (lengthCheckTwo) {
        screen.style.fontSize = "60px"
    }
}

BTN_OPERATION['ERASE'].addEventListener('click', () => {
    const screen = UI_ELEMENTS['CALC_BOTTOM_RESULT']

    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1)
})

BTN_OPERATION['CLEAR'].addEventListener('click', () => {
    UI_ELEMENTS['CALC_BOTTOM_RESULT'].textContent = '0'
    numberTwo = ''
    numberOne = ''
});


UI_ELEMENTS['CALC_BTNS'].forEach((element) => {
    element.addEventListener('click', () => {
        checkFontSize()

        const screen = UI_ELEMENTS['CALC_BOTTOM_RESULT']

        if (!numberOne) {
            screen.textContent === '0' ? screen.textContent = element.textContent : screen.textContent += element.textContent
        } else {
            screen.textContent === numberOne ? numberTwo = (screen.textContent = element.textContent) : numberTwo = (screen.textContent += element.textContent)
        }
    })
});


BTN_OPERATION['OPERANDS'].forEach((element) => {
    element.addEventListener('click', result)
})

function result() {
    const screen = UI_ELEMENTS['CALC_BOTTOM_RESULT']

    switch (this.textContent) {

        case '+':
            numberOne = screen.textContent
            operation = 'plus'
            break

        case '-':
            numberOne = screen.textContent
            operation = 'minus'
            break

        case 'x':
            numberOne = screen.textContent
            operation = 'mult'
            break

        case '÷':
            numberOne = screen.textContent
            operation = 'div'
            break

        case '=':
            screen.textContent = calc()
            UI_ELEMENTS['CALC_TOP_RESULT'].textContent = screen.textContent
            break

        default:

    }
}
function calc() {

    if (operation === "div") {
        return numberOne / numberTwo
    }
    if (operation === "mult") {
        return numberOne * numberTwo
    }
    if (operation === "minus") {
        return numberOne - numberTwo
    }
    if (operation === "plus") {
        return +numberOne + +numberTwo
    }
}

