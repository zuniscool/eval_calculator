'use strict'

const equal = document.querySelector('.equal');
const display = document.querySelector('.part-display');
const clear = document.querySelector('.clear');
const transform = document.querySelector('.transform');
const percent = document.querySelector('.percent');

// Receives the clicked button as an argument and operates.
function inputEvent(e) {
    const targetBtn = e.target.textContent;

    if(display.textContent == '0') {
        display.textContent = '';
    }
    display.textContent += targetBtn;
}

// 1. Font-size adjustment when inputted length is over 18 word.
// 2. Display a warning message, when inputted length is 38 word.
function smallText() {
    const currentDisplay = display.textContent.toString().length;

    if (currentDisplay >= 18 && currentDisplay < 39) {
        display.classList.remove('part-display');
        display.classList.add('small_text');
    } else if (currentDisplay >= 38) {
        display.textContent = 0;
        alert('숫자가 너무 많습니다. AC버튼을 누르고 다시 입력하세요.')
        display.classList.add('part-display');
        display.classList.remove('small_text');
    } else {
        display.classList.add('part-display');
        display.classList.remove('small_text');
    }
}

// calculation result
function init() {
    let inputtedOperator = display.textContent.indexOf('+');
    let removeIndex = inputtedOperator+1;
    const currentNumber = display.textContent;
    const findZero = currentNumber.charAt(removeIndex);
    let result;
    if (findZero == 0) {
        const removeZero = currentNumber.replace('0', '');
        try {
            result = eval(removeZero);
            display.textContent = result;
        } catch (error) {
            alert('피연산자의 첫 숫자 0을 제거하세요.');
        }
    } else {
        try {
            result = eval(display.textContent).toString();
            const dotIndex = result.indexOf('.');
            if (result.charAt(dotIndex) == '.') {
    
                display.textContent = eval(result).toFixed(4);
            } else {
                display.textContent = result;
            }
        } catch (error) {
            alert('피연산자의 첫 숫자 0을 제거하세요.');
        }
    }
}

// Prevent Duplication Input
function preventDuplication(key) {
    const text = display.textContent;
    let search = text.indexOf(key);
    let countNum = 0;
    while (search !== -1) {
        countNum++;
        search = text.indexOf(key, search + 1);
    }

    if (countNum >= 2) {
        const resultText = display.textContent;
        const replaceText1 = resultText.replace(`${key}${key}`, '');
        display.textContent = replaceText1;
    }
}

// Input by a keyboard.
const onKeyDown = addEventListener('keydown', (e) => {
    const keyName = e.key;
    const parsed = keyName.replace(/[^0-9]/g, '');
    const downedKey = parseInt(parsed);

    switch (downedKey.toString()) {
        case 'NaN':
            break;
        default:
            if (display.textContent == 0) {
                display.textContent = '';
            }
            display.textContent += keyName;
    }

    if (display.textContent == 0) {
        return;
    } else if (keyName == '+' || keyName == '-' || keyName == '*' || keyName == '/' || keyName == '.' || keyName == 'Enter' || keyName == 'Escape' || keyName == 'Backspace') {
        switch (keyName) {
            case '+':
                display.textContent += keyName;
                break;
            case '-':
                display.textContent += keyName;
                break;
            case '*':
                display.textContent += keyName;
                break;
            case '/':
                display.textContent += keyName;
                break;
            case '.':
                display.textContent += keyName;
                break;
            case 'Enter':
                init();
                break;
            case 'Escape': case 'Backspace':
                display.textContent = 0;
                break;
        }
        preventDuplication(keyName);
    }
    
    smallText();
})

// Click a button
const onClick = addEventListener('click', (e) => {
    const buttonName = e.target.classList[0];


    switch (buttonName) {
        case 'calc':
            inputEvent(e);
            break;
        case 'clear':
            display.textContent = 0;
            break;
        case 'transform':
            const parsed = parseInt(display.textContent);
            if (parsed >= 1) {
                display.textContent = `-${display.textContent}`;
            } else if (parsed < 0) {
                display.textContent = display.textContent.slice(1);
            }
            break;
        case 'percent':
            display.textContent = eval(display.textContent*0.01);
            break;
        case 'equal':
            init();
    }

    smallText();
});